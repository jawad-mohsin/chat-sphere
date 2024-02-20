import User from "@models/User";
import { connectToDB } from "@mongodb/config";

export const POST = async (req, { params }) => {
  try {
    await connectToDB();

    const { userid } = params;
    console.log(userid);

    const body = await req.json();

    const { username, profileImage } = body;

    const updatedUser = await User.findByIdAndUpdate(
      userid,
      {
        username,
        profileImage,
      },
      { new: true }
    );

    return new Response(JSON.stringify(updatedUser), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to update user", { status: 500 });
  }
};
