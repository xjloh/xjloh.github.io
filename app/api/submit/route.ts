"use server";
import { NextApiRequest, NextApiResponse } from "next";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("over here");
  if (req.method === "POST") {
    console.log("here");
    const formData = new FormData();
    for (const key in req.body) {
      formData.append(key, req.body[key]);
    }
    formData.append("access_key", process.env.EMAIL_ACCESS_KEY || "");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    if (!response.ok) {
      const errorData = await response.json(); // Try to get error details
      console.error(
        "Web3Forms submission failed:",
        errorData || response.status,
        await response.text()
      );
      return res
        .status(response.status)
        .json({ error: "Web3Forms submission failed" });
    }

    const result = await response.json();
    if (result.success) {
      return res
        .status(200)
        .json({ success: true, message: "Form submitted successfully" });
    } else {
      console.error("Web3Forms submission returned an error:", result);
      return res
        .status(400)
        .json({ error: "Web3Forms returned an error", details: result });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
