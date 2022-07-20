const plus = document.getElementsByClassName("counter-plus");
const minus = document.getElementsByClassName("counter-minus");

// set increment counter
for (let i = 0; i < plus.length; i++) {
  var increment = plus[i];
  increment.addEventListener("click", (e) => {
    var event = e.target;

    var input = event.parentElement.children[1];

    var inputValue = input.value;

    var newValue = parseInt(inputValue) + 1;

    newValue = newValue < 10 ? "0" + newValue : newValue;

    input.value = newValue;
  });
}

// set decrement counter
for (let j = 0; j < minus.length; j++) {
  var decrement = minus[j];
  decrement.addEventListener("click", (e) => {
    var event = e.target;

    var input = event.parentElement.children[1];

    var inputValue = input.value;

    var newValue = parseInt(inputValue) - 1;

    newValue = newValue < 10 ? "0" + newValue : newValue;

    if (newValue >= 0) {
      input.value = newValue;
    }
  });
}

// fetch amyrobson from local json file
const amy_avatar = document.querySelector(".amy-avatar");
const amy_username = document.querySelector(".amy-username");
const amy_createAt = document.querySelector(".amy-createdAt");
const amy_content = document.querySelector(".amy-content");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    var amy_img = document.createElement("img");
    amy_img.src = data.comments[0].user.image.png;
    amy_avatar.appendChild(amy_img);
    amy_username.innerHTML = data.comments[0].user.username;
    amy_createAt.innerHTML = data.comments[0].createdAt;
    amy_content.innerHTML = data.comments[0].content;
  });

// fetch maxbiagun from local json file
const max_avatar = document.querySelector(".max-avatar");
const max_username = document.querySelector(".max-username");
const max_createAt = document.querySelector(".max-createdAt");
const max_content = document.querySelector(".max-content");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    var max_img = document.createElement("img");
    max_img.src = data.comments[1].user.image.png;
    max_avatar.appendChild(max_img);
    max_username.innerHTML = data.comments[1].user.username;
    max_createAt.innerHTML = data.comments[1].createdAt;
    max_content.innerHTML = data.comments[1].content;
  });

// fetch Ramses from local json file
const ramses_avatar = document.querySelector(".ramses-avatar");
const ramses_username = document.querySelector(".ramses-username");
const ramses_createAt = document.querySelector(".ramses-createdAt");
const ramses_content = document.querySelector(".ramses-content");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    var ramses_img = document.createElement("img");
    ramses_img.src = data.comments[1].replies[0].user.image.png;
    ramses_avatar.appendChild(ramses_img);
    ramses_username.innerHTML = data.comments[1].replies[0].user.username;
    ramses_createAt.innerHTML = data.comments[1].replies[0].createdAt;
    ramses_content.innerHTML = `@${data.comments[1].replies[0].replyingTo} ${data.comments[1].replies[0].content}`;
  });

// fetch juliusomo from local json file for pseudo footer
const pseudo_avatar_footer = document.querySelector(".pseudo-avatar-footer");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    var pseudo_img = document.createElement("img");
    pseudo_img.src = data.currentUser.image.png;
    pseudo_avatar_footer.appendChild(pseudo_img);
  });

// fetch juliusomo from local json file under ramsesmiron
const julius_Avatar = document.querySelector(".julius-avatar-img");
const julius_Username = document.querySelector(".julius-username");
const julius_CreatedAt = document.querySelector(".julius-createdAt");
const julius_Content = document.querySelector(".julius-content");
const julius_edit = document.querySelector(".pseudo-edit");
const julius_del = document.querySelector(".pseudo-delete");
const julius_edit_del = document.querySelector(".pseudo-edit-delete");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    julius_Avatar.src = data.comments[1].replies[1].user.image.png;
    julius_Username.innerHTML = data.comments[1].replies[1].user.username;
    julius_CreatedAt.innerHTML = data.comments[1].replies[1].createdAt;
    julius_Content.innerHTML = `@${data.comments[1].replies[1].replyingTo} ${data.comments[1].replies[1].content}`;
  });

// Dom manipulation for delete button
julius_del.addEventListener("click", () => {
  const delete_comment = document.querySelector(".delete-comments");
  const second_article_child = document.querySelector(".pseudo-footer-comment");
  const del_coms = document.createElement("div");
  del_coms.classList.add("del-coms");

  const del_coms_h1 = document.createElement("h1");
  del_coms_h1.textContent = "Delete comment";
  del_coms.appendChild(del_coms_h1);

  const del_coms_p = document.createElement("p");
  del_coms_p.textContent =
    "Are you sure you want to delete this comment? This will remove the comment and can't be undone.";
  del_coms.appendChild(del_coms_p);

  const del_coms_btns = document.createElement("div");
  del_coms_btns.classList.add("del-coms-btns");

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("cancel-btn");
  cancelBtn.textContent = "NO, CANCEL";
  del_coms_btns.appendChild(cancelBtn);

  const delBtn = document.createElement("button");
  delBtn.classList.add("del-btn");
  delBtn.textContent = "YES, DELETE";
  del_coms_btns.appendChild(delBtn);

  // Append parent element del_coms to the child element del_coms_btns
  del_coms.appendChild(del_coms_btns);
  delete_comment.appendChild(del_coms);

  julius_del.addEventListener("click", () => {
    delete_comment.style.display = "block";
    delete_comment.style.zIndex = "5";
  });

  // AddEventListeners for cancel button and "yes, delete button"
  cancelBtn.addEventListener("click", () => {
    delete_comment.style.display = "none";
  });

  delBtn.addEventListener("click", () => {
    delete_comment.style.display = "none";
    second_article_child.style.display = "none";
  });
});

// Dom manipulation for edit button
julius_edit.addEventListener("click", () => {
  julius_Content.contentEditable = "true";
  julius_Content.style.border = "1px solid black";
  julius_Content.style.padding = "0.5rem";
  julius_Content.style.margin = "1rem 0";
  julius_update.style.display = "block";
  julius_edit.style.display = "none";
  julius_del.style.display = "none";
});

// create the update button
const julius_update = document.createElement("button");
julius_update.classList.add("update");
julius_update.textContent = "UPDATE";
julius_edit_del.appendChild(julius_update);

// Dom manipulation for update button
julius_update.addEventListener("click", () => {
  julius_Content.contentEditable = "false";
  julius_Content.style.border = "1px solid transparent";
  julius_Content.style.padding = "1.3rem 0";
  julius_Content.style.margin = "0";
  julius_update.style.display = "none";
  julius_edit.style.display = "flex";
  julius_del.style.display = "flex";
});

// toggle on and off Reply from main articles
const reply = document.querySelector(".reply");

reply.addEventListener("click", () => {
  const pseudo_article = document.querySelector(".pseudo-article");

  pseudo_article.classList.toggle("show");

  // fetch pseudo-article (comments)
  const pseudo_avatar = document.querySelector(".pseudo-avatar");

  pseudo_article.style.display = "block";

  let p_textArea = document.querySelector("#pseudo-article-content");

  p_textArea.value = null;

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      var pseudo_img = document.createElement("img");
      pseudo_img.src = data.currentUser.image.png;
      pseudo_avatar.appendChild(pseudo_img);
    });
});

const ram_reply = document.querySelector("#reply");

ram_reply.addEventListener("click", () => {
  const pseudo_article = document.querySelector("#pseudo-article");

  pseudo_article.classList.toggle("show");

  // fetch pseudo-article (comments)
  const pseudo_avatar = document.querySelector("#pseudo-avatar");

  pseudo_article.style.display = "block";

  let p_textArea = document.querySelector(".ram_txtArea");

  p_textArea.value = null;

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      var pseudo_img = document.createElement("img");
      pseudo_img.src = data.currentUser.image.png;
      pseudo_avatar.appendChild(pseudo_img);
    });
});

// fetch juliusomo from local json file
const julius_avatar = document.querySelector(".julius-avatar");
const julius_username = document.querySelector(".julius-username");
const julius_createAt = document.querySelector(".julius-createdAt");
const julius_content = document.querySelector(".julius-content");
const delete_content = document.querySelector(".pseudo-delete");
const edit_content = document.querySelector(".pseudo-edit");

// Reply comment DOM Manipulation
const pseudo_btn = document.querySelector(".pseudo-btn");

window.addEventListener("load", () => {
  const pseudo_btn = document.querySelector("#pseudo-form-btn");
  const p_articles = document.querySelector(".pseudo-reply-articles");
  let p_textArea = document.querySelector("#pseudo-article-content");
  let pseudo_article = document.querySelector(".pseudo-article");

  pseudo_btn.addEventListener("submit", (e) => {
    e.preventDefault();

    if (p_textArea.value == "") {
      alert("Please enter a reply");
    } else {
      pseudo_article.style.display = "none";

      // create a div tag with the class name pseudo-reply-article
      const pArticle = document.createElement("div");
      pArticle.classList.add("pseudo-reply-article");

      // create a div tag with the class name pseudo-header
      const pheader = document.createElement("div");
      pheader.classList.add("pseudo-header");

      // create a div tag with the class name pseudo-header-user
      const pheader_user = document.createElement("div");
      pheader_user.classList.add("pseudo-header-user");

      // create pseudo avatar
      const pAvatar_user = document.createElement("div");
      pAvatar_user.classList.add("julius-avatar");
      const pAvatar_img = document.createElement("img");
      pAvatar_img.style.height = "2rem";
      pAvatar_img.style.width = "2rem";
      pAvatar_user.appendChild(pAvatar_img);

      // create user name
      const pUsername = document.createElement("p");
      pUsername.style.paddingLeft = "0.5rem";
      pUsername.style.fontWeight = "700";
      pUsername.classList.add("julius-username");

      // create pseudo status
      const pStatus = document.createElement("div");
      pStatus.style.background = "hsl(238, 40%, 52%)";
      pStatus.style.padding = "0.3rem 0.4rem";
      pStatus.style.fontWeight = "700";
      pStatus.style.color = "white";
      pStatus.style.fontSize = "0.8rem";
      pStatus.style.letterSpacing = "0.1rem";
      pStatus.style.marginLeft = "0.5rem";

      pStatus.textContent = "you";

      // create a p tag as a child of pheader (julius-createdAt)
      const pCreatedAt = document.createElement("p");
      pCreatedAt.classList.add("julius-createdAt");

      // Append all child element to pheader
      pheader.appendChild(pheader_user);
      pheader.appendChild(pAvatar_user);
      pheader.appendChild(pUsername);
      pheader.appendChild(pStatus);
      pheader.appendChild(pCreatedAt);

      // append the child element pheader to the parent Element pArticle
      pArticle.appendChild(pheader);

      // create element for pseudo content
      const pContent = document.createElement("textarea");
      pContent.style.color = "hsl(211, 10%, 45%)";
      pContent.style.padding = "1.3rem 0";
      pContent.style.fontSize = "1rem";
      pContent.style.width = "100%";
      pContent.style.lineHeight = "23px";
      pContent.setAttribute("readonly", "readonly");
      pContent.innerHTML = `@amyrobson ${p_textArea.value}`;

      // append the child element pContent to the parent Element pArticle
      pArticle.appendChild(pContent);

      // create element for pseudo footer
      const pFooter = document.createElement("div");
      pFooter.classList.add("pseudo-footer");

      // create element for counter
      const counter = document.createElement("div");
      counter.classList.add("counter");

      const counter_plus = document.createElement("div");
      counter_plus.textContent = "+";
      counter_plus.classList.add("counter-plus");

      const counter_input = document.createElement("input");
      counter_input.classList.add("count");
      counter_input.type = "text";
      counter_input.value = "00";
      counter_input.setAttribute("readonly", "readonly");

      const counter_minus = document.createElement("div");
      counter_minus.textContent = "-";
      counter_minus.classList.add("counter-minus");

      // set increment counter
      let a = 0;

      counter_plus.addEventListener("click", () => {
        a++;
        a = a < 10 ? "0" + a : a;

        counter_input.value = a;
        console.log("moses");
      });

      counter_minus.addEventListener("click", () => {
        if (a > 0) {
          a--;
          a = a < 10 ? "0" + a : a;

          counter_input.value = a;
        }
      });

      // append counter plus, counter minus and counter input
      counter.appendChild(counter_plus);
      counter.appendChild(counter_input);
      counter.appendChild(counter_minus);

      // Create the div element with class name of pseudo-edit-delete
      const pseudo_edit_del = document.createElement("div");
      pseudo_edit_del.classList.add("pseudo-edit-delete");
      const pseudo_del = document.createElement("div");
      pseudo_del.classList.add("pseudo-delete");
      const pseudo_edit = document.createElement("div");
      pseudo_edit.classList.add("pseudo-edit");

      // Create pseudo delete icon and pseudo delete p tag
      const pseudo_del_icon = document.createElement("div");
      pseudo_del_icon.classList.add("pseudo-delete-icon");
      const del_img = document.createElement("img");
      del_img.src = "./images/icon-delete.svg";
      pseudo_del_icon.appendChild(del_img);
      pseudo_del.appendChild(pseudo_del_icon);
      const pseudo_del_txt = document.createElement("p");
      pseudo_del_txt.textContent = "Delete";
      pseudo_del.appendChild(pseudo_del_txt);
      pseudo_edit_del.appendChild(pseudo_del);

      // create pseudo_edit icon and pseudo edit p tag
      const pseudo_edit_icon = document.createElement("div");
      pseudo_edit_icon.classList.add("pseudo-edit-icon");
      const edit_img = document.createElement("img");
      edit_img.src = "./images/icon-edit.svg";
      pseudo_edit_icon.appendChild(edit_img);
      pseudo_edit.appendChild(pseudo_edit_icon);
      const pseudo_edit_txt = document.createElement("p");
      pseudo_edit_txt.textContent = "Edit";
      pseudo_edit.appendChild(pseudo_edit_txt);
      pseudo_edit_del.appendChild(pseudo_edit);

      // create the update button
      const update = document.createElement("button");
      update.classList.add("update");
      update.textContent = "UPDATE";
      pseudo_edit_del.appendChild(update);

      // Dom manipulation for edit button
      pseudo_edit.addEventListener("click", () => {
        pContent.removeAttribute("readonly", "readonly");
        pContent.style.border = "1px solid black";
        pContent.style.padding = "0.5rem";
        pContent.style.margin = "1rem 0";
        update.style.display = "block";
        pseudo_edit.style.display = "none";
        pseudo_del.style.display = "none";
      });

      // Dom manipulation for update button
      update.addEventListener("click", () => {
        pContent.setAttribute("readonly", "readonly");
        pContent.style.border = "1px solid transparent";
        pContent.style.padding = "1.3rem 0";
        pContent.style.margin = "0";
        update.style.display = "none";
        pseudo_edit.style.display = "flex";
        pseudo_del.style.display = "flex";
      });

      // Dom manipulation for delete comment button
      const delete_comment = document.querySelector(".delete-comments");
      const del_coms = document.createElement("div");
      del_coms.classList.add("del-coms");

      const del_coms_h1 = document.createElement("h1");
      del_coms_h1.textContent = "Delete comment";
      del_coms.appendChild(del_coms_h1);

      const del_coms_p = document.createElement("p");
      del_coms_p.textContent =
        "Are you sure you want to delete this comment? This will remove the comment and can't be undone.";
      del_coms.appendChild(del_coms_p);

      const del_coms_btns = document.createElement("div");
      del_coms_btns.classList.add("del-coms-btns");

      const cancelBtn = document.createElement("button");
      cancelBtn.classList.add("cancel-btn");
      cancelBtn.textContent = "NO, CANCEL";
      del_coms_btns.appendChild(cancelBtn);

      const delBtn = document.createElement("button");
      delBtn.classList.add("del-btn");
      delBtn.textContent = "YES, DELETE";
      del_coms_btns.appendChild(delBtn);

      // append parent element del_coms to the child element del_coms_btns
      del_coms.appendChild(del_coms_btns);
      delete_comment.appendChild(del_coms);

      pseudo_del.addEventListener("click", () => {
        delete_comment.style.display = "block";
      });

      // AddEventListeners for cancel button and "yes, delete button"
      cancelBtn.addEventListener("click", () => {
        delete_comment.style.display = "none";
      });

      delBtn.addEventListener("click", () => {
        delete_comment.style.display = "none";
        // p_articles.removeChild(pArticle);
        pArticle.style.display = "none";
      });

      // Append all child element to pFooter
      pFooter.appendChild(counter);
      pFooter.appendChild(pseudo_edit_del);

      // append the child element pheader to the parent Element pArticle
      pArticle.appendChild(pheader);
      pArticle.appendChild(pContent);
      pArticle.appendChild(pFooter);

      p_articles.appendChild(pArticle);

      fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
          pAvatar_img.src = data.comments[1].replies[1].user.image.png;
          pUsername.innerHTML = data.comments[1].replies[1].user.username;
          pCreatedAt.innerHTML = data.comments[1].replies[1].createdAt;
        });
    }
  });

  const footer_btn = document.querySelector("#footer-btn");
  let pseudo_txtArea = document.querySelector("#pseudo-article-footer-content");
  const pseudo_footer_comment = document.querySelector(
    ".julius-footer-comment"
  );

  footer_btn.addEventListener("submit", (e) => {
    e.preventDefault();

    if (pseudo_txtArea.value == "") {
      alert("Please enter a reply");
    } else {
      // create a div tag with the class name pseudo-reply-article
      const pArticle = document.createElement("div");
      pArticle.classList.add("pseudo-reply-article");

      // create a div tag with the class name pseudo-header
      const pheader = document.createElement("div");
      pheader.classList.add("pseudo-header");

      // create a div tag with the class name pseudo-header-user
      const pheader_user = document.createElement("div");
      pheader_user.classList.add("pseudo-header-user");

      // create pseudo avatar
      const pAvatar_user = document.createElement("div");
      pAvatar_user.classList.add("julius-avatar");
      const pAvatar_img = document.createElement("img");
      pAvatar_img.style.height = "2rem";
      pAvatar_img.style.width = "2rem";
      pAvatar_user.appendChild(pAvatar_img);

      // create user name
      const pUsername = document.createElement("p");
      pUsername.style.paddingLeft = "0.5rem";
      pUsername.style.fontWeight = "700";
      pUsername.classList.add("julius-username");

      // create pseudo status
      const pStatus = document.createElement("div");
      pStatus.style.background = "hsl(238, 40%, 52%)";
      pStatus.style.padding = "0.3rem 0.4rem";
      pStatus.style.fontWeight = "700";
      pStatus.style.color = "white";
      pStatus.style.fontSize = "0.8rem";
      pStatus.style.letterSpacing = "0.1rem";
      pStatus.style.marginLeft = "0.5rem";

      pStatus.textContent = "you";

      // create a p tag as a child of pheader (julius-createdAt)
      const pCreatedAt = document.createElement("p");
      pCreatedAt.classList.add("julius-createdAt");

      // Append all child element to pheader
      pheader.appendChild(pheader_user);
      pheader.appendChild(pAvatar_user);
      pheader.appendChild(pUsername);
      pheader.appendChild(pStatus);
      pheader.appendChild(pCreatedAt);

      // append the child element pheader to the parent Element pArticle
      pArticle.appendChild(pheader);

      // create element for pseudo content
      const pContent = document.createElement("textarea");
      pContent.style.color = "hsl(211, 10%, 45%)";
      pContent.style.padding = "1.3rem 0";
      pContent.style.fontSize = "1rem";
      pContent.style.width = "100%";
      pContent.style.lineHeight = "23px";
      pContent.setAttribute("readonly", "readonly");
      pContent.innerHTML = `@maxbiagun ${pseudo_txtArea.value}`;

      // append the child element pContent to the parent Element pArticle
      pArticle.appendChild(pContent);

      // create element for pseudo footer
      const pFooter = document.createElement("div");
      pFooter.classList.add("pseudo-footer");

      // create element for counter
      const counter = document.createElement("div");
      counter.classList.add("counter");

      const counter_plus = document.createElement("div");
      counter_plus.textContent = "+";
      counter_plus.classList.add("counter-plus");

      const counter_input = document.createElement("input");
      counter_input.classList.add("count");
      counter_input.type = "text";
      counter_input.value = "00";
      counter_input.setAttribute("readonly", "readonly");

      const counter_minus = document.createElement("div");
      counter_minus.textContent = "-";
      counter_minus.classList.add("counter-minus");

      // set increment counter
      let a = 0;

      counter_plus.addEventListener("click", () => {
        a++;
        a = a < 10 ? "0" + a : a;

        counter_input.value = a;
        console.log("moses");
      });

      counter_minus.addEventListener("click", () => {
        if (a > 0) {
          a--;
          a = a < 10 ? "0" + a : a;

          counter_input.value = a;
        }
      });

      // append counter plus, counter minus and counter input
      counter.appendChild(counter_plus);
      counter.appendChild(counter_input);
      counter.appendChild(counter_minus);

      // Create the div element with class name of pseudo-edit-delete
      const pseudo_edit_del = document.createElement("div");
      pseudo_edit_del.classList.add("pseudo-edit-delete");
      const pseudo_del = document.createElement("div");
      pseudo_del.classList.add("pseudo-delete");
      const pseudo_edit = document.createElement("div");
      pseudo_edit.classList.add("pseudo-edit");

      // Create pseudo delete icon and pseudo delete p tag
      const pseudo_del_icon = document.createElement("div");
      pseudo_del_icon.classList.add("pseudo-delete-icon");
      const del_img = document.createElement("img");
      del_img.src = "./images/icon-delete.svg";
      pseudo_del_icon.appendChild(del_img);
      pseudo_del.appendChild(pseudo_del_icon);
      const pseudo_del_txt = document.createElement("p");
      pseudo_del_txt.textContent = "Delete";
      pseudo_del.appendChild(pseudo_del_txt);
      pseudo_edit_del.appendChild(pseudo_del);

      // create pseudo_edit icon and pseudo edit p tag
      const pseudo_edit_icon = document.createElement("div");
      pseudo_edit_icon.classList.add("pseudo-edit-icon");
      const edit_img = document.createElement("img");
      edit_img.src = "./images/icon-edit.svg";
      pseudo_edit_icon.appendChild(edit_img);
      pseudo_edit.appendChild(pseudo_edit_icon);
      const pseudo_edit_txt = document.createElement("p");
      pseudo_edit_txt.textContent = "Edit";
      pseudo_edit.appendChild(pseudo_edit_txt);
      pseudo_edit_del.appendChild(pseudo_edit);

      // create the update button
      const update = document.createElement("button");
      update.classList.add("update");
      update.textContent = "UPDATE";
      pseudo_edit_del.appendChild(update);

      // Dom manipulation for edit button
      pseudo_edit.addEventListener("click", () => {
        pContent.removeAttribute("readonly", "readonly");
        pContent.style.border = "1px solid black";
        pContent.style.padding = "0.5rem";
        pContent.style.margin = "1rem 0";
        update.style.display = "block";
        pseudo_edit.style.display = "none";
        pseudo_del.style.display = "none";
      });

      // Dom manipulation for update button
      update.addEventListener("click", () => {
        pContent.setAttribute("readonly", "readonly");
        pContent.style.border = "1px solid transparent";
        pContent.style.padding = "1.3rem 0";
        pContent.style.margin = "0";
        update.style.display = "none";
        pseudo_edit.style.display = "flex";
        pseudo_del.style.display = "flex";
      });

      // Dom manipulation for delete comment button
      const delete_comment = document.querySelector(".delete-comments");
      const del_coms = document.createElement("div");
      del_coms.classList.add("del-coms");

      const del_coms_h1 = document.createElement("h1");
      del_coms_h1.textContent = "Delete comment";
      del_coms.appendChild(del_coms_h1);

      const del_coms_p = document.createElement("p");
      del_coms_p.textContent =
        "Are you sure you want to delete this comment? This will remove the comment and can't be undone.";
      del_coms.appendChild(del_coms_p);

      const del_coms_btns = document.createElement("div");
      del_coms_btns.classList.add("del-coms-btns");

      const cancelBtn = document.createElement("button");
      cancelBtn.classList.add("cancel-btn");
      cancelBtn.textContent = "NO, CANCEL";
      del_coms_btns.appendChild(cancelBtn);

      const delBtn = document.createElement("button");
      delBtn.classList.add("del-btn");
      delBtn.textContent = "YES, DELETE";
      del_coms_btns.appendChild(delBtn);

      // append parent element del_coms to the child element del_coms_btns
      del_coms.appendChild(del_coms_btns);
      delete_comment.appendChild(del_coms);

      pseudo_del.addEventListener("click", () => {
        delete_comment.style.display = "block";
      });

      // AddEventListeners for cancel button and "yes, delete button"
      cancelBtn.addEventListener("click", () => {
        delete_comment.style.display = "none";
      });

      delBtn.addEventListener("click", () => {
        delete_comment.style.display = "none";
        pseudo_footer_comment.removeChild(pArticle);
      });

      // Append all child element to pFooter
      pFooter.appendChild(counter);
      pFooter.appendChild(pseudo_edit_del);

      // append the child element pheader to the parent Element pArticle
      pArticle.appendChild(pheader);
      pArticle.appendChild(pContent);
      pArticle.appendChild(pFooter);

      pseudo_footer_comment.appendChild(pArticle);

      fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
          pAvatar_img.src = data.comments[1].replies[1].user.image.png;
          pUsername.innerHTML = data.comments[1].replies[1].user.username;
          pCreatedAt.innerHTML = data.comments[1].replies[1].createdAt;
        });
    }
  });

  const ram_btn = document.querySelector(".ram-pseudo-btn");
  const ram_txt = document.querySelector(".ram_txtArea");
  const ramses_comment = document.querySelector(".ramses-footer-comment");
  const ramses_article = document.querySelector("#pseudo-article");

  ram_btn.addEventListener("submit", (e) => {
    e.preventDefault();

    if (ram_txt.value == "") {
      alert("Please enter a reply");
    } else {
      ramses_article.style.display = "none";
      // create a div tag with the class name pseudo-reply-article
      const pArticle = document.createElement("div");
      pArticle.classList.add("pseudo-reply-article");

      // create a div tag with the class name pseudo-header
      const pheader = document.createElement("div");
      pheader.classList.add("pseudo-header");

      // create a div tag with the class name pseudo-header-user
      const pheader_user = document.createElement("div");
      pheader_user.classList.add("pseudo-header-user");

      // create pseudo avatar
      const pAvatar_user = document.createElement("div");
      pAvatar_user.classList.add("julius-avatar");
      const pAvatar_img = document.createElement("img");
      pAvatar_img.style.height = "2rem";
      pAvatar_img.style.width = "2rem";
      pAvatar_user.appendChild(pAvatar_img);

      // create user name
      const pUsername = document.createElement("p");
      pUsername.style.paddingLeft = "0.5rem";
      pUsername.style.fontWeight = "700";
      pUsername.classList.add("julius-username");

      // create pseudo status
      const pStatus = document.createElement("div");
      pStatus.style.background = "hsl(238, 40%, 52%)";
      pStatus.style.padding = "0.3rem 0.4rem";
      pStatus.style.fontWeight = "700";
      pStatus.style.color = "white";
      pStatus.style.fontSize = "0.8rem";
      pStatus.style.letterSpacing = "0.1rem";
      pStatus.style.marginLeft = "0.5rem";

      pStatus.textContent = "you";

      // create a p tag as a child of pheader (julius-createdAt)
      const pCreatedAt = document.createElement("p");
      pCreatedAt.classList.add("julius-createdAt");

      // Append all child element to pheader
      pheader.appendChild(pheader_user);
      pheader.appendChild(pAvatar_user);
      pheader.appendChild(pUsername);
      pheader.appendChild(pStatus);
      pheader.appendChild(pCreatedAt);

      // append the child element pheader to the parent Element pArticle
      pArticle.appendChild(pheader);

      // create element for pseudo content
      const pContent = document.createElement("textarea");
      pContent.style.color = "hsl(211, 10%, 45%)";
      pContent.style.padding = "1.3rem 0";
      pContent.style.fontSize = "1rem";
      pContent.style.width = "100%";
      pContent.style.lineHeight = "23px";
      pContent.setAttribute("readonly", "readonly");
      pContent.innerHTML = `@ramsesmiron ${ram_txt.value}`;

      // append the child element pContent to the parent Element pArticle
      pArticle.appendChild(pContent);

      // create element for pseudo footer
      const pFooter = document.createElement("div");
      pFooter.classList.add("pseudo-footer");

      // create element for counter
      const counter = document.createElement("div");
      counter.classList.add("counter");

      const counter_plus = document.createElement("div");
      counter_plus.textContent = "+";
      counter_plus.classList.add("counter-plus");

      const counter_input = document.createElement("input");
      counter_input.classList.add("count");
      counter_input.type = "text";
      counter_input.value = "00";
      counter_input.setAttribute("readonly", "readonly");

      const counter_minus = document.createElement("div");
      counter_minus.textContent = "-";
      counter_minus.classList.add("counter-minus");

      // set increment counter
      let a = 0;

      counter_plus.addEventListener("click", () => {
        a++;
        a = a < 10 ? "0" + a : a;

        counter_input.value = a;
        console.log("moses");
      });

      counter_minus.addEventListener("click", () => {
        if (a > 0) {
          a--;
          a = a < 10 ? "0" + a : a;

          counter_input.value = a;
        }
      });

      // append counter plus, counter minus and counter input
      counter.appendChild(counter_plus);
      counter.appendChild(counter_input);
      counter.appendChild(counter_minus);

      // Create the div element with class name of pseudo-edit-delete
      const pseudo_edit_del = document.createElement("div");
      pseudo_edit_del.classList.add("pseudo-edit-delete");
      const pseudo_del = document.createElement("div");
      pseudo_del.classList.add("pseudo-delete");
      const pseudo_edit = document.createElement("div");
      pseudo_edit.classList.add("pseudo-edit");

      // Create pseudo delete icon and pseudo delete p tag
      const pseudo_del_icon = document.createElement("div");
      pseudo_del_icon.classList.add("pseudo-delete-icon");
      const del_img = document.createElement("img");
      del_img.src = "./images/icon-delete.svg";
      pseudo_del_icon.appendChild(del_img);
      pseudo_del.appendChild(pseudo_del_icon);
      const pseudo_del_txt = document.createElement("p");
      pseudo_del_txt.textContent = "Delete";
      pseudo_del.appendChild(pseudo_del_txt);
      pseudo_edit_del.appendChild(pseudo_del);

      // create pseudo_edit icon and pseudo edit p tag
      const pseudo_edit_icon = document.createElement("div");
      pseudo_edit_icon.classList.add("pseudo-edit-icon");
      const edit_img = document.createElement("img");
      edit_img.src = "./images/icon-edit.svg";
      pseudo_edit_icon.appendChild(edit_img);
      pseudo_edit.appendChild(pseudo_edit_icon);
      const pseudo_edit_txt = document.createElement("p");
      pseudo_edit_txt.textContent = "Edit";
      pseudo_edit.appendChild(pseudo_edit_txt);
      pseudo_edit_del.appendChild(pseudo_edit);

      // create the update button
      const update = document.createElement("button");
      update.classList.add("update");
      update.textContent = "UPDATE";
      pseudo_edit_del.appendChild(update);

      // Dom manipulation for edit button
      pseudo_edit.addEventListener("click", () => {
        pContent.removeAttribute("readonly", "readonly");
        pContent.style.border = "1px solid black";
        pContent.style.padding = "0.5rem";
        pContent.style.margin = "1rem 0";
        update.style.display = "block";
        pseudo_edit.style.display = "none";
        pseudo_del.style.display = "none";
      });

      // Dom manipulation for update button
      update.addEventListener("click", () => {
        pContent.setAttribute("readonly", "readonly");
        pContent.style.border = "1px solid transparent";
        pContent.style.padding = "1.3rem 0";
        pContent.style.margin = "0";
        update.style.display = "none";
        pseudo_edit.style.display = "flex";
        pseudo_del.style.display = "flex";
      });

      // Dom manipulation for delete comment button
      const delete_comment = document.querySelector(".delete-comments");
      const del_coms = document.createElement("div");
      del_coms.classList.add("del-coms");

      const del_coms_h1 = document.createElement("h1");
      del_coms_h1.textContent = "Delete comment";
      del_coms.appendChild(del_coms_h1);

      const del_coms_p = document.createElement("p");
      del_coms_p.textContent =
        "Are you sure you want to delete this comment? This will remove the comment and can't be undone.";
      del_coms.appendChild(del_coms_p);

      const del_coms_btns = document.createElement("div");
      del_coms_btns.classList.add("del-coms-btns");

      const cancelBtn = document.createElement("button");
      cancelBtn.classList.add("cancel-btn");
      cancelBtn.textContent = "NO, CANCEL";
      del_coms_btns.appendChild(cancelBtn);

      const delBtn = document.createElement("button");
      delBtn.classList.add("del-btn");
      delBtn.textContent = "YES, DELETE";
      del_coms_btns.appendChild(delBtn);

      // append parent element del_coms to the child element del_coms_btns
      del_coms.appendChild(del_coms_btns);
      delete_comment.appendChild(del_coms);

      pseudo_del.addEventListener("click", () => {
        delete_comment.style.display = "block";
      });

      // AddEventListeners for cancel button and "yes, delete button"
      cancelBtn.addEventListener("click", () => {
        delete_comment.style.display = "none";
      });

      delBtn.addEventListener("click", () => {
        delete_comment.style.display = "none";
        ramses_comment.removeChild(pArticle);
      });

      // Append all child element to pFooter
      pFooter.appendChild(counter);
      pFooter.appendChild(pseudo_edit_del);

      // append the child element pheader to the parent Element pArticle
      pArticle.appendChild(pheader);
      pArticle.appendChild(pContent);
      pArticle.appendChild(pFooter);

      ramses_comment.appendChild(pArticle);

      fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
          pAvatar_img.src = data.comments[1].replies[1].user.image.png;
          pUsername.innerHTML = data.comments[1].replies[1].user.username;
          pCreatedAt.innerHTML = data.comments[1].replies[1].createdAt;
        });
    }
  });
});
