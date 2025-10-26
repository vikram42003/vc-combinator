import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(post._createdAt)}</p>

        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{post.views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${post.author?._id}`}>
            <p className="text-16-medium line-clamp-1">{post.author?.name}</p>
          </Link>

          <Link href={`/startup/${post._id}`}>
            <h3 className="text-26-semibold line-clamp-1">{post.title}</h3>
          </Link>
        </div>

        <Link href={`/user/${post.author?._id}`}>
          <Image
            src="https://placehold.co/48x48"
            alt={`${post.author?.name}'s profile image`}
            height={48}
            width={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Link href={`/startup/${post._id}`}>
        <p className="startup-card_desc">{post.description}</p>
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.image} alt={`${post.title} Startup's poster image`} className="startup-card_img" />
        }
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${post.category.toLowerCase()}`}>
          <p className="text-16-medium">{post.category}</p>
        </Link>

        {/* an <a> tag inside a button is bad design, but when we do asChild on a component like button it will
            pass all its props to its child and what will be rendered is an <a> tag but with all the props of button
            We still keep button there as an intermediary mainly for consistent styles, cause it came with shadcn*/}
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${post._id}`}>
            Details
          </Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
