import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import Featuredbanner from "../home/Featuredbanner";
import BlogSidebar from "./BlogSidebar";
import Comment from "./Comment";
const Sinlgeblog = () => {
  const [desc, setDesc] = useState();
  const { blogId } = useParams();

  useEffect(() => {
    axios
      .get(`https://borkha-shop.onrender.com/blog/singleblog/${blogId}`)
      .then((res) => setDesc(res.data));
  }, [blogId]);
  const DATE_OPTIONS = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <div className="max-w-screen-2xl  mx-auto">
      <Featuredbanner name={desc?.blogTitle} />
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:px-20 px-10 my-20 gap-10">
        <div className="col-span-2">
          <img src={desc?.blogImg} alt="" />
          <h1 className="mt-5 text-2xl font-bold">{desc?.blogTitle}</h1>
          <div className="flex gap-4 my-6">
            <Link
              to="/author"
              state={{ author: desc?.author }}
              className="flex items-center gap-2 text-base cursor-pointer "
            >
              <BiUser /> {desc?.author}
            </Link>
            <p className="flex items-center gap-2 text-base ">
              <MdOutlineWatchLater />{" "}
              {new Date(desc?.createdAt).toLocaleDateString(
                "en-US",
                DATE_OPTIONS
              )}
            </p>
            <p className="flex items-center gap-2 text-base ">
              <FaRegCommentDots /> <span>0 Comments</span>
            </p>
          </div>
          <p className="leading-7">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, “Lorem ipsum dolor sit
            amet..”, comes from a line in section 1.10.32.
          </p>
          <p className="my-5 leading-7">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from “de
            Finibus Bonorum et Malorum” by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham. There are many variations of passages of
            Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised words which don’t look
            even slightly believable. If you are going to use a passage of Lorem
            Ipsum, you need to be sure there isn’t anything embarrassing hidden
            in the middle of text. All the Lorem Ipsum generators on the
            Internet tend to repeat predefined chunks as necessary, making this
            the first true generator on the Internet. It uses a dictionary of
            over 200 Latin words, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable. The
            generated Lorem Ipsum is therefore always free from repetition,
            injected humour, or non-characteristic words etc.
          </p>
          <p className="leading-7">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
          <Comment desc={desc} />
        </div>
        <div>
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
};

export default Sinlgeblog;
