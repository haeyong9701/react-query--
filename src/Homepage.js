import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./api";

function HomePage() {
  const { data: postsData } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    staleTime: 60 * 1000,
    gcTime: 60 * 1000 * 10,
  });

  const posts = postsData?.results ?? [];

  console.log(posts);

  return <div>홈페이지</div>;
}

export default HomePage;
