// import './style.scss';
import { differenceInCalendarDays } from "date-fns";

// const REQUEST_URL = "https://mocki.io/v1/4ae76d00-4831-47d0-895b-644f5c181061";

// 間違っているURLの場合↓
// const REQUEST_URL = "https://myjson.dit.upm.es/api/bins/ほげほげajy3";
// 空の配列の場合↓
// const REQUEST_URL = "https://mocki.io/v1/242b685f-a3d7-45a8-aeca-0376bd495b89";
// 503エラーの場合↓
// const REQUEST_URL = "https://httpstat.us/503";

const json = {
  data: [
    {
      isInitialDisplay: "true",
      field: "ニュース",
      img: "./img/news_img.jpg",
      contents: [
        {
          id: "3a1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a3",
          title: "news記事タイトル1",
          date: "2022-04-13",
          comments: [
            {
              id: "3a1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a3-c124",
              data: "2022-03-10",
              name: "Chris",
              comment_content: "Chrisのコメント"
            },
            {
              id: "3a1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a3-c110",
              data: "2022-03-11",
              name: "Zelma",
              comment_content: "Zelmaのコメント"
            }
          ]
        },
        {
          id: "4a1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a4",
          title: "news記事タイトル2",
          date: "2022-04-10",
          comments: []
        },
        {
          id: "1a1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a1",
          title: "news記事タイトル3",
          date: "2022-04-09",
          comments: [
            {
              id: "1a1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a1-c021",
              data: "2022-03-11",
              name: "Alex",
              comment_content: "Alexのコメント"
            },
            {
              id: "3a1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a3-c100",
              data: "2022-03-14",
              name: "Zelma",
              comment_content: "Zelmaのコメント"
            }
          ]
        },
        {
          id: "2a1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a2",
          title: "news記事タイトル4",
          date: "2022-04-13",
          comments: [
            {
              id: "2a1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a2-c125",
              data: "2022-03-13",
              name: "Dana",
              comment_content: "Danaのコメント"
            },
            {
              id: "3a1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a3-c090",
              data: "2022-03-15",
              name: "Zelma",
              comment_content: "Zelmaのコメント"
            },
            {
              id: "4a1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a4-c102",
              data: "2022-03-12",
              name: "Pat",
              comment_content: "Patのコメント"
            },
            {
              id: "3a1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a3-c153",
              data: "2022-03-10",
              name: "Chris",
              comment_content: "Chrisのコメント"
            },
            {
              id: "1a1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a1-c171",
              data: "2022-03-11",
              name: "Alex",
              comment_content: "Alexのコメント"
            }
          ]
        }
      ]
    },
    {
      isInitialDisplay: "false",
      field: "経済",
      img: "./img/economy_img.jpg",
      contents: [
        {
          id: "2b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6b2",
          title: "経済記事タイトル1",
          date: "2022-04-01",
          comments: []
        },
        {
          id: "1b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6b1",
          title: "経済記事タイトル2",
          date: "2022-04-13",
          comments: [
            {
              id: "1b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6b1-c225",
              data: "2022-03-15",
              name: "Jamie",
              comment_content: "Jamieのコメント"
            },
            {
              id: "2b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6b2-c201",
              data: "2022-03-17",
              name: "Hunter",
              comment_content: "Hunterのコメント"
            }
          ]
        },
        {
          id: "4b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6b4",
          title: "経済記事タイトル3",
          date: "2022-04-05",
          comments: [
            {
              id: "4b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6b4-c220",
              data: "2022-03-14",
              name: "Morgan",
              comment_content: "Morganのコメント"
            },
            {
              id: "1b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6b1-c024",
              data: "2022-03-25",
              name: "Jamie",
              comment_content: "Jamieのコメント"
            },
            {
              id: "2b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6b2-c011",
              data: "2022-03-17",
              name: "Hunter",
              comment_content: "Hunterのコメント"
            }
          ]
        },
        {
          id: "3b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6b3",
          title: "経済記事タイトル4",
          date: "2022-04-12",
          comments: [
            {
              id: "3b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6b3-c222",
              data: "2022-03-13",
              name: "Robin",
              comment_content: "Robinのコメント"
            }
          ]
        }
      ]
    },
    {
      isInitialDisplay: "false",
      field: "エンタメ",
      img: "./img/entertainment_img.jpg",
      contents: [
        {
          id: "4c1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6c4",
          title: "エンタメ記事タイトル1",
          date: "2022-04-08",
          comments: [
            {
              id: "4c1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6c4-c325",
              data: "2022-03-16",
              name: "Ronnie",
              comment_content: "Ronnieのコメント"
            },
            {
              id: "3b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6b3-c323",
              data: "2022-03-13",
              name: "Robin",
              comment_content: "Robinのコメント"
            }
          ]
        },
        {
          id: "2c1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6c2",
          title: "エンタメ記事タイトル2",
          date: "2022-04-12",
          comments: [
            {
              id: "2c1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6c2-c324",
              data: "2022-03-18",
              name: "Shannon",
              comment_content: "Shannonのコメント"
            }
          ]
        },
        {
          id: "3c1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6c3",
          title: "エンタメ記事タイトル3",
          date: "2022-04-12",
          comments: [
            {
              id: "3c1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6c3-c320",
              data: "2022-03-17",
              name: "Terry",
              comment_content: "Terryのコメント"
            },
            {
              id: "4c1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6c4-c005",
              data: "2022-03-18",
              name: "Ronnie",
              comment_content: "Ronnieのコメント"
            },
            {
              id: "3b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6b3-c003",
              data: "2022-03-15",
              name: "Robin",
              comment_content: "Robinのコメント"
            }
          ]
        },
        {
          id: "1c1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6c1",
          title: "エンタメ記事タイトル4",
          date: "2022-04-07",
          comments: [
            {
              id: "1c1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6c1-c303",
              data: "2022-03-15",
              name: "Tracey",
              comment_content: "Traceyのコメント"
            },
            {
              id: "2c1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6c2-c304",
              data: "2022-03-15",
              name: "Shannon",
              comment_content: "Shannonのコメント"
            }
          ]
        }
      ]
    },
    {
      isInitialDisplay: "false",
      field: "スポーツ",
      img: "./img/sports_img.jpg",
      contents: [
        {
          id: "2d1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d2",
          title: "スポーツ記事タイトル1",
          date: "2022-04-13",
          comments: [
            {
              id: "3a1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a3-c425",
              data: "2022-03-24",
              name: "Abbi",
              comment_content: "Abbiのコメント"
            }
          ]
        },
        {
          id: "1d1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d1",
          title: "スポーツ記事タイトル2",
          date: "2022-04-11",
          comments: [
            {
              id: "1d1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d1-c424",
              data: "2022-03-23",
              name: "Addison",
              comment_content: "Addisonのコメント"
            },
            {
              id: "3a1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a3-c401",
              data: "2022-03-24",
              name: "Abbi",
              comment_content: "Abbiのコメント"
            },
            {
              id: "3a1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a3-c403",
              data: "2022-03-22",
              name: "Britny",
              comment_content: "Britnyのコメント"
            }
          ]
        },
        {
          id: "3d1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d3",
          title: "スポーツ記事タイトル3",
          date: "2022-04-05",
          comments: [
            {
              id: "3a1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a3-c423",
              data: "2022-03-22",
              name: "Britny",
              comment_content: "Britnyのコメント"
            }
          ]
        },
        {
          id: "4d1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d4",
          title: "スポーツ記事タイトル4",
          date: "2022-04-08",
          comments: [
            {
              id: "3a1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a3-c422",
              data: "2022-03-21",
              name: "Dell",
              comment_content: "Dellのコメント"
            },
            {
              id: "1d1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d1-c104",
              data: "2022-03-23",
              name: "Addison",
              comment_content: "Addisonのコメント"
            },
            {
              id: "3a1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a3-c301",
              data: "2022-03-24",
              name: "Abbi",
              comment_content: "Abbiのコメント"
            },
            {
              id: "3a1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a3-c503",
              data: "2022-03-22",
              name: "Britny",
              comment_content: "Britnyのコメント"
            }
          ]
        }
      ]
    },
    {
      isInitialDisplay: "false",
      field: "国内",
      img: "./img/domestic_img.jpg",
      contents: [
        {
          id: "3e1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6e3",
          title: "国内記事タイトル1",
          date: "2022-04-02",
          comments: [
            {
              id: "3a1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a3-c522",
              data: "2022-03-25",
              name: "Leta",
              comment_content: "Letaのコメント"
            },
            {
              id: "3a1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a3-c520",
              data: "2022-03-27",
              name: "Martez",
              comment_content: "Martezのコメント"
            }
          ]
        },
        {
          id: "4e1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6e4",
          title: "国内記事タイトル2",
          date: "2022-04-13",
          comments: [
            {
              id: "3a1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a3-c521",
              data: "2022-03-28",
              name: "Martez",
              comment_content: "Martezのコメント"
            }
          ]
        },
        {
          id: "1e1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6e1",
          title: "国内記事タイトル3",
          date: "2022-04-07",
          comments: []
        },
        {
          id: "2e1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6e2",
          title: "国内記事タイトル4",
          date: "2022-04-13",
          comments: [
            {
              id: "3a1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a3-c524",
              data: "2022-03-29",
              name: "Zoey",
              comment_content: "Zoeyのコメント"
            },
            {
              id: "3a1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a3-c527",
              data: "2022-03-29",
              name: "Zeke",
              comment_content: "Zekeのコメント"
            }
          ]
        }
      ]
    }
  ]
};

const request = async () => {
  // const response = await fetch(REQUEST_URL, {
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // });
  // if (!response.ok) {
  //   throw new Error(`${response.status}:${response.statusText}`);
  // } else {
  //   return response.json();
  // }
  const jsonData = json;
  console.log(jsonData);
  return jsonData;
};

const init = async () => {
  renderLoadingImg();
  let responseJsonData;

  try {
    responseJsonData = await request();
    console.log(responseJsonData);
    if (!responseJsonData) {
      return;
    }
  } catch (error) {
    displayErrorMessage(error.message);
  } finally {
    hideLoadingImg();
  }

  if (!responseJsonData.data.length) {
    displayErrorMessage("data is empty");
    return;
  }

  displayNews(responseJsonData.data);
};

const displayErrorMessage = (error) => {
  const p = document.createElement("p");
  p.textContent = error;
  document.body.prepend(p);
};

const displayNews = (newsDataArray) => {
  renderNewsTab(newsDataArray);
  renderNewsContent(newsDataArray);
};

const renderNewsTab = (newsDataArray) => {
  const tabList = document.getElementById("js_tabList");
  const fragment = document.createDocumentFragment();

  newsDataArray.forEach((newsCategoryObj, newsCategoryIndex) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    let isInitialDisplay = newsCategoryObj.isInitialDisplay;

    if (isInitialDisplay === "true") {
      li.setAttribute("aria-selected", true);
    } else {
      li.setAttribute("aria-selected", false);
    }
    li.setAttribute("roll", "tab");
    li.id = `${"js_tabTopics" + ++newsCategoryIndex}`;
    li.classList = "tabTopics";

    a.textContent = newsCategoryObj.field;
    a.href = "#";

    li.appendChild(a);
    fragment.appendChild(li);
  });
  tabList.appendChild(fragment);

  clickEventChangeTabAttribute();
};

const renderNewsContent = (newsDataArray) => {
  newsDataArray.forEach((newsCategoryObj, newsCategoryIndex) => {
    const tabTopics = document.querySelectorAll(".tabTopics");
    const newsContentsData = newsCategoryObj.contents;
    const newsCategoryImg = newsCategoryObj.img;
    let isInitialDisplay = newsCategoryObj.isInitialDisplay;

    if (isInitialDisplay === "true") {
      const div = document.createElement("div");
      const newsSection = createSection(tabTopics, newsCategoryIndex);

      div.classList = "tabpanelTopics_wrap";

      document.getElementById("js_tabList").after(newsSection);
      div.appendChild(createTopicImg(newsCategoryImg));
      div.prepend(renderArticle(newsContentsData, newsCategoryIndex));

      newsSection.appendChild(div);
    }

    tabTopics[newsCategoryIndex].addEventListener("click", (e) => {
      removeCommentIcon();
      removeNewIcon();

      newsContentsData.forEach(
        (newsArticleData, categoryNewsArticleDataIndex) => {
          const commentArray = newsArticleData.comments;
          const liElements = document.querySelectorAll(
            ".tabpanelTopics_wrap li"
          );
          const liElement = liElements[categoryNewsArticleDataIndex];

          changeCategoryConetent(newsCategoryIndex, e.currentTarget);
          changeCategoryTitle(newsArticleData, categoryNewsArticleDataIndex);
          changeCategoryImg(newsCategoryImg);

          if (commentArray.length !== 0) {
            liElement.append(createCommentIcon(commentArray));
          }

          if (isLatestArticles(newsArticleData) === true) {
            const h1Elements = document.querySelectorAll(
              ".tabpanelTopics_wrap h1"
            );
            const h1Element = h1Elements[categoryNewsArticleDataIndex];
            h1Element.insertAdjacentElement("afterend", createNewIcon());
          }
        }
      );
    });
  });
};

const createNewIcon = () => {
  const span = document.createElement("span");

  span.classList = "newIcon";
  span.textContent = "NEW";

  return span;
};

const isLatestArticles = (newsArticleData) => {
  const PERIODOFLATESTARTICLES = 3;
  const newsArticleDate = newsArticleData.date;

  const nowDate = new Date();
  const postDate = new Date(newsArticleDate);

  const periodOfDays = differenceInCalendarDays(nowDate, postDate);
  const result = periodOfDays <= PERIODOFLATESTARTICLES;

  return result;
};

const clickEventChangeTabAttribute = () => {
  const tabTopics = document.querySelectorAll(".tabTopics");
  for (let i = 0; i < tabTopics.length; i++) {
    tabTopics[i].addEventListener("click", (event) => {
      const selectedTab = document.querySelector('[aria-selected="true"]');
      selectedTab.ariaSelected = false;
      event.currentTarget.ariaSelected = true;
    });
  }
};

const removeCommentIcon = () => {
  const commentIconWrapElements = document.querySelectorAll(
    ".commentIcon_wrap"
  );
  for (let i = 0; i < commentIconWrapElements.length; i++) {
    commentIconWrapElements[i].remove();
  }
};

const removeNewIcon = () => {
  const newIconElements = document.querySelectorAll(".newIcon");
  for (let i = 0; i < newIconElements.length; i++) {
    newIconElements[i].remove();
  }
};

const changeCategoryTitle = (newsArticleData, categoryNewsArticleDataIndex) => {
  const currentNewsContentAncorElements = document.querySelectorAll(
    `section[roll="tabpanel"] a`
  );
  currentNewsContentAncorElements[categoryNewsArticleDataIndex].textContent =
    newsArticleData.title;
};

const changeCategoryImg = (newsCategoryImg) => {
  const currentNewsContentImgElem = document.querySelector(
    ".tabTopicImg > img"
  );
  currentNewsContentImgElem.src = newsCategoryImg;
};

const changeCategoryConetent = (newsCategoryIndex, clickedTabElement) => {
  const tabTopicIdName = clickedTabElement.id;
  const currentNewsSectionElem = document.querySelector(
    `section[roll="tabpanel"]`
  );

  currentNewsSectionElem.id = `${"tabpanelTopics" + (newsCategoryIndex + 1)}`;
  currentNewsSectionElem.setAttribute("aria-labelledby", tabTopicIdName);
};

const renderArticle = (newsContentsData) => {
  const ul = document.createElement("ul");
  const fragment = document.createDocumentFragment();

  newsContentsData.forEach((newsArticleData) => {
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const a = document.createElement("a");

    const title = newsArticleData.title;
    const commentArray = newsArticleData.comments;

    a.href = "#";
    a.textContent = title;

    h1.appendChild(a);
    li.appendChild(h1);

    if (commentArray.length !== 0) {
      li.append(createCommentIcon(commentArray));
    }

    if (isLatestArticles(newsArticleData) === true) {
      h1.insertAdjacentElement("afterend", createNewIcon());
    }

    fragment.appendChild(li);
  });
  ul.appendChild(fragment);

  return ul;
};

const createCommentIcon = (commentArray) => {
  const div = document.createElement("div");

  div.classList = "commentIcon_wrap";
  div.insertAdjacentHTML(
    "beforeend",
    `<span class="fa-layers fa-fw">
            <i class="fa fa-light fa-comment faa-vertical animated"></i>
            <span class= "fa-layers-counter" > ${commentArray.length}</span>
        </span>`
  );

  return div;
};

const createSection = (tabTopics, index) => {
  const section = document.createElement("section");
  const tabTopicElem = document.getElementById(tabTopics[index].id);
  const tabIdName = tabTopicElem.id;

  section.id = `${"tabpanelTopics" + (index + 1)} `;
  section.setAttribute("aria-labelledby", tabIdName);
  section.setAttribute("roll", "tabpanel");

  return section;
};

const createTopicImg = (imgPath) => {
  const img = document.createElement("img");
  const div = document.createElement("div");

  div.classList = "tabTopicImg";
  img.src = imgPath;
  img.width = "350";
  img.height = "250";

  div.appendChild(img);

  return div;
};

const renderLoadingImg = () => {
  const div = document.createElement("div");
  const img = document.createElement("img");

  div.classList = "loading_wrap";
  div.id = "js_loading_wrap";
  img.src = "./img/loading-circle.gif";
  img.alt = "ローディング画像";

  div.appendChild(img);
  document.body.prepend(div);
};

const hideLoadingImg = () => {
  document.getElementById("js_loading_wrap").remove();
};

init();
