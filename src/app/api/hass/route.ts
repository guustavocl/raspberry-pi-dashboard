import { NextResponse } from "next/server";
import { createConnection, createLongLivedTokenAuth, Connection } from "home-assistant-js-websocket";

const hassUrl = process.env.NEXT_PUBLIC_HASS_URL || "";
const hassToken = process.env.NEXT_PUBLIC_HASS_TOKEN || "";
let connection: Connection;

async function createHassConnection() {
  const auth = createLongLivedTokenAuth(hassUrl, hassToken);
  connection = await createConnection({ auth });
}
createHassConnection();

export async function GET() {
  if (!connection) await createHassConnection();

  return NextResponse.json({ oi: "oi" });
}

export async function POST() {
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  // })
  // const data = await res.json()

  return NextResponse.json({ oi: "postou" });
}
