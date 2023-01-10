import { html } from "../../node_modules/lit-html/lit-html.js";
import { getItemById, onEdit } from "../api/data.js";

let context = null;
let itemId = null;
export async function showEdit(ctx) {
  itemId = ctx.params.id;
  context = ctx;

  try {
    const data = await getItemById(itemId);
    ctx.render(editTemplate(data));
  } catch (error) {
    window.alert(error);
  }
}

const editTemplate = (data) => html` <section id="edit">
  <div class="form">
    <h2>Edit Album</h2>
    <form class="edit-form" @submit=${onEditSubmit}>
      <input
        type="text"
        name="singer"
        id="album-singer"
        placeholder="Singer/Band"
        .value=${data.singer}
      />
      <input
        type="text"
        name="album"
        id="album-album"
        placeholder="Album"
        .value=${data.album}
      />
      <input
        type="text"
        name="imageUrl"
        id="album-img"
        placeholder="Image url"
        .value=${data.imageUrl}
      />
      <input
        type="text"
        name="release"
        id="album-release"
        placeholder="Release date"
        .value=${data.release}
      />
      <input
        type="text"
        name="label"
        id="album-label"
        placeholder="Label"
        .value=${data.label}
      />
      <input
        type="text"
        name="sales"
        id="album-sales"
        placeholder="Sales"
        .value=${data.sales}
      />

      <button type="submit">post</button>
    </form>
  </div>
</section>`;

const onEditSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  try {
    if (
      !data.singer ||
      !data.album ||
      !data.imageUrl ||
      !data.release ||
      !data.label ||
      !data.sales
    ) {
      throw new Error("Empty fields");
    }

    await onEdit(itemId, data);

    context.page.redirect(`/details/${itemId}`);

  } catch (error) {
    window.alert(error)
  }
};
