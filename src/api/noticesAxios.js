import { client } from "./client";

// 공지사항 리스트
export const getNoticeList = async (setNotices, setTotalCount, currentPage) => {
  try {
    const res = await client.get(`/api/notice?page=${currentPage}`, {
      timeout: 1000,
    });
    const result = res.data.list;
    setNotices(result);
    const totalCount = res.data.total;
    setTotalCount(totalCount);
  } catch (err) {
    console.error(err);
  }
};

export const searchNotice = async (
  search,
  currentPage,
  setSearchedNotice,
  setSearchTotal,
) => {
  try {
    let endpoint = `/api/notice/search?`;
    if (search) {
      endpoint += `search=${encodeURIComponent(search)}&`;
    }
    endpoint += `page=${currentPage}`;
    const res = await client.get(endpoint);
    setSearchedNotice(search ? res.data.list : []);
    setSearchTotal(search ? res.data.searchTotal : []);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// 글 등록
export const postNoticeData = async dataToSend => {
  try {
    const response = await client.post("/api/notice", dataToSend);
    return response;
  } catch (err) {
    console.error(err);
  }
};

// 게시판 글 가져오기
export const getNoticeData = async noticeId => {
  try {
    const res = await client.get(`/api/notice/bynotice?noticeId=${noticeId}`);
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const patchNoticeData = async dataToSend => {
  try {
    const response = await client.patch(`/api/notice`, dataToSend);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const delectNoticeData = async noticeId => {
  try {
    const res = await client.delete(`/api/notice?noticeId=${noticeId}`);
    return res;
  } catch (err) {
    console.error(err);
  }
};

export const patchNoticeHit = async noticeId => {
  try {
    const response = await client.patch(
      `/api/notice/hits?noticeId=${noticeId}`,
    );
    return response;
  } catch (err) {
    console.error(err);
  }
};
