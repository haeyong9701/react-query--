import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./api";

function HomePage() {
  const {
    data: postsData,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    staleTime: 60 * 1000,
    gcTime: 60 * 1000 * 10,
    retry: 0,
  });

  if (isPending) return "로딩 중입니다...";

  if (isError) return "에러가 발생했습니다.";

  const posts = postsData?.results ?? [];

  console.log(posts);

  return <div>홈페이지</div>;
}

export default HomePage;
