import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { PortableText, urlFor } from "lib/sanity";

const Article = ({
  article: { title, author, bannerImage, body },
}) => (
  <div>
    <Head>
      <title>{`${title} | Article`}</title>
    </Head>
    <h1 className="text-left font-oxygen text-2xl font-bold my-3 mx-4 md:m-6">
      {title}
    </h1>
    <div className="md:flex md:flex-row">
      <div className="flex flex-row justify-around md:block md:w-1/5">
        <div className="flex flex-row md:mx-auto">
          <div className="w-20 h-20">
            <Image
              src={urlFor(author.authorImage).height(150).width(150).url()}
              alt={author.name}
              width={150}
              height={150}
              className="rounded-full"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
          <div className="pl-3 flex flex-col justify-around">
            <h2 className="text-left font-oxygen text-lg font-bold">
              {author.name}
            </h2>
            <Link
              href={`/author/${author.slug.current}`}
              className="text-blue-500 hover:underline font-firaSans">
              {"View Profile"}
            </Link>
          </div>
        </div>
      </div>
      <div className="portableText mt-3 md:mt-0 md:w-4/5 text-lg">
        <div className="w-auto h-40 md:h-96 relative my-3">
          <Image
            src={urlFor(bannerImage).url()}
            alt={title}
            fill
            sizes="100vw"
            style={{
              objectFit: "scale-down"
            }} />
        </div>
        <PortableText value={body} />
      </div>
    </div>
  </div>
);

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
      authorImage: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.shape({
        current: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    bannerImage: PropTypes.object.isRequired,
    body: PropTypes.array.isRequired,
  }).isRequired,
};

export default Article;
