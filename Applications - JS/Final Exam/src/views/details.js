import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import {
  getItemById,
  getTotalLikes,
  likeChecker,
  onAddLike,
  onDelete,
} from "../api/data.js";
import { getUserData } from "../util.js";

let context = null;
let itemId = null;

export async function showDetails(ctx) {
  context = ctx;
  itemId = ctx.params.id;
  try {
    const itemData = await getItemById(itemId);
    const totalLikes = await getTotalLikes(itemId);
    const likeCheck = await likeChecker(itemId, getUserData() && getUserData()._id);
    ctx.render(detailsTemplate(itemData, totalLikes, likeCheck));
  } catch (error) {
    window.alert(error);
  }
}

const detailsTemplate = (itemData, totalLikes, likeCheck) => html` <section id="details">
  <div id="details-wrapper">
    <p id="details-title">Album Details</p>
    <div id="img-wrapper">
      <img src="${itemData.imageUrl}" alt="example1" />
    </div>
    <div id="info-wrapper">
      <p>
        <strong>Band:</strong
        ><span id="details-singer">${itemData.singer}</span>
      </p>
      <p>
        <strong>Album name:</strong
        ><span id="details-album">${itemData.album}</span>
      </p>
      <p>
        <strong>Release date:</strong
        ><span id="details-release">${itemData.release}</span>
      </p>
      <p>
        <strong>Label:</strong><span id="details-label">${itemData.label}</span>
      </p>
      <p>
        <strong>Sales:</strong><span id="details-sales">${itemData.sales}</span>
      </p>
    </div>
    <div id="likes">Likes: <span id="likes-count">${totalLikes}</span></div>

    <!--Edit and Delete are only for creator-->
    <div id="action-buttons">
      ${getUserData() && getUserData()._id === itemData._ownerId
        ? editDelButtTempl()
        : nothing }

${getUserData() && getUserData()._id !== itemData._ownerId
      ? html`
          ${likeCheck == 0
            ? html`<a href="" id="like-btn" @click=${onLikeFunc}>Like</a>`
            : nothing}
        `
      : nothing}
    </div>
  </div>
</section>`;

const editDelButtTempl = () => html` <a href="/edit/${itemId}" id="edit-btn"
    >Edit</a
  >
  <a href="javascript:void(0)" id="delete-btn" @click=${onDeleteClick}
    >Delete</a
  >`;

const onDeleteClick = async () => {
  try {
    const toDelete = confirm("are you sure?");

    if (toDelete) {
      await onDelete(itemId);
      context.page.redirect(`/dashboard}`);
    } else {
      return;
    }
  } catch (error) {
    window.alert(error);
  }
};

const onLikeFunc = async () => {
  const albumId = itemId;

  try {
    await onAddLike({ albumId });
    context.page.redirect(`/details/${albumId}`)
  } catch (error) {
    window.alert(error);
  }
};
