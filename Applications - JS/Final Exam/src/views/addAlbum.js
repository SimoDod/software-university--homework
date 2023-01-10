import { html } from "../../node_modules/lit-html/lit-html.js";
import { onAddAlbum } from "../api/data.js";

let context = null;
export async function showAddAlbum(ctx) {
  ctx.render(addAlbumTemplate());
  context = ctx;
}

const addAlbumTemplate = () => html` <section id="create">
  <div class="form">
    <h2>Add Album</h2>
    <form class="create-form" @submit=${onAddAlbumSubmit}>
      <input
        type="text"
        name="singer"
        id="album-singer"
        placeholder="Singer/Band"
      />
      <input type="text" name="album" id="album-album" placeholder="Album" />
      <input
        type="text"
        name="imageUrl"
        id="album-img"
        placeholder="Image url"
      />
      <input
        type="text"
        name="release"
        id="album-release"
        placeholder="Release date"
      />
      <input type="text" name="label" id="album-label" placeholder="Label" />
      <input type="text" name="sales" id="album-sales" placeholder="Sales" />

      <button type="submit">post</button>
    </form>
  </div>
</section>`;

const onAddAlbumSubmit = async (e) => {
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
      throw new Error("Empty Fields");
    }

    await onAddAlbum(data);
    context.page.redirect('/dashboard');
  } catch (error) {
    window.alert(error)
  }
};
