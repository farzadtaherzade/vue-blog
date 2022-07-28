<template>
  <div class="new-blog container">
    <form>
      <div class="blog-info">
        <input type="text" placeholder="Title" class="title" />
        <div class="upload-file">
          <label for="blog-photo">Upload Cover Photo</label>
          <button>Preview Cover</button>
          <input type="file" id="blog-photo" />
        </div>
      </div>
      <div class="editor">
        <ckeditor
          :editor="editor"
          v-model="editorData"
          :config="editorConfig"
        ></ckeditor>
      </div>
      <div class="action">
        <button class="">Publish Blog</button>
        <button class="">Post Preview</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ref } from "vue";

const editor = ref(ClassicEditor);
const editorData = ref("");
const editorConfig = ref({
  height: "500px",
});
</script>

<style lang="scss">
.new-blog {
  width: 100%;
  margin-top: 20px;
  form {
    width: 80%;
    margin: 0 auto;
    .blog-info {
      display: flex;
      align-items: center;
      .title {
        width: 350px;
        padding: 15px 0;
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.384);
        outline: none;
        background-color: transparent;
      }
      .upload-file {
        width: 100%;
        display: flex;
        align-items: center;
        label,
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 41px;
          width: 150px;
          border-radius: 40px;
          margin-left: 13px;
          outline: none;
          border: none;
          background-color: rgb(26, 23, 23);
          color: #fff;
          cursor: pointer;
          font-size: 13px;
        }
        #blog-photo {
          visibility: hidden;
        }
      }
    }
    .editor {
      margin-top: 20px;
      .ck-editor__editable {
        min-height: 500px;
      }
    }
    .action {
      margin-top: 20px;
      button {
        padding: 14px 20px;
        border-radius: 40px;
        margin-right: 13px;
        outline: none;
        border: none;
        background-color: rgb(26, 23, 23);
        color: #fff;
        cursor: pointer;
        font-size: 13px;
      }
    }
  }
}
</style>