import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { todos } = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content:
          "when responding, welcome the user always as Mr.Qaiss and say welcome to the trello clone project, limit the response to 200 characters",
      },
      {
        role: "system",
        content: `hi there, provide a summary of the following todos, Count how many todos are in each category such as To do,
              in progress and done, then tell the user to have a productive day! here's the data :
              ${JSON.stringify(todos)}`,
      },
    ],
  });

  // const { data } = response;

  // console.log("DATA is : ", data);
  // console.log(data.choices[0].message);

  // return NextResponse.json(data.choices[0].message);
}
