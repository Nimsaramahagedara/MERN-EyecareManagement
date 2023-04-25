import { DBlog, IBlog } from "../models/Blog.model";
import { IUser } from "../models/User.model";
import Blog from "../schemas/Blog.schema";
import { AppLogger } from "../utils/logging";

export async function createBlog(data: DBlog, user?: IUser): Promise<IBlog> {
    const iBlogs = new Blog(data);
    const blog = await iBlogs.save();
    AppLogger.info(`Create blog(ID: ${blog._id}) by ${user?.role} (ID: ${user?._id})`);
    return blog;
}
