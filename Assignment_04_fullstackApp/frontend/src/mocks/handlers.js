import { rest } from "msw";

export const handlers = [
  rest.post("http://localhost:4000/adduser", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data: "user added successfully" }));
  }),

  rest.post("http://localhost:4000/login", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          first_name: "Gaurav",
          last_name: "Chavhan",
          user_type: "Admin",
          contact: "9527980158",
          email: "gkchavhan98@gmail.com",
        },
      ])
    );
  }),

  rest.get("http://localhost:4000/getrewardoption", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([{ name: "Your Reward" }]));
  }),
];
