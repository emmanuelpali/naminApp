import { connectClient, stopClient } from "../server/db";

async function main() {
  const client = await connectClient();

  await client.collection("NameRequest").deleteMany({});

  const resp = await client.collection("NameRequest").insertMany([
    {
      id: "Female Names",
      nameSugestion: "Female English Names",
      description: `We are looking for English names  for our new baby `,
      names: [
        {
          id: "Elizabeth",
          name: "Elizabeth",
          timestamp: new Date(),
        },
        {
          id: "Jane",
          name: "Jane",
          timestamp: new Date(),
        },
      ],
    },
    {
      id: "Dog Names",
      nameSugestion: "Female Dog Names",
      description: ` I am adopting a Dog, I need help picking a beautiful name`,
      names: [],
    },
    {
      id: "Ngas Names",
      nameSugestion: "Ngas names",
      description: `Jane is due in a weeks time, we need help coming up with a name. I will like Nengak`,
      names: [
        {
          id: "Nendir",
          name: "Nendir",
          timestamp: new Date(),
        },
        {
          id: "Nenman",
          name: "Nenman",
          timestamp: new Date(),
        },
        {
          id: "Nenrot",
          name: "Nenrot",
          timestamp: new Date(),
        },
      ],
    },
  ]);

  console.info("Inserted Contests:", resp.insertedCount);

  stopClient();
}

main();