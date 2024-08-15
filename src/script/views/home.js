import Notes from "../data/notes.js";

const home = async () => {
  // Mengambil Notes
  const notes = await Notes.getNotes();
  const notesArchives = await Notes.getNotesArchives();

  // Mengambil Tag Notelist
  const noteListEl = document.querySelector("note-list");
  const noteListElArc = document.querySelector("note-list-archived");

  // Buat Tag NoteItem
  const noteItemElement = document.createElement("note-item");
  const noteItemElementArc = document.createElement("note-item-archived");

  // Mengambil data dan input ke Tag HTML notelist
  noteListEl.innerHTML = "";
  notes.forEach((note) => {
    noteItemElement.note = note;
    noteListEl.append(noteItemElement);
  });

  // Mengambil data dan input ke Tag HTML notelist archived
  noteListElArc.innerHTML = "";
  notesArchives.forEach((note) => {
    noteItemElementArc.note = note;
    noteListElArc.append(noteItemElementArc);
  });

  // Popup Box
  const popupBox = document.querySelector(".popup-box");
  document.querySelector(".add-note").addEventListener("click", () => {
    popupBox.classList.add("show");
  });

  popupBox.querySelector(".head img").addEventListener("click", () => {
    popupBox.classList.remove("show");
  });

  // Tambah Note
  document.querySelector("button").addEventListener("click", async () => {
    let title = document.querySelector(".input-title").value,
      desc = document.querySelector(".input-desc").value;
    await Notes.createNotes({ title, desc });
    location.reload();
  });

  // mengambil id untuk eksekusi delete atau archive
  if (notes.length > 0) {
    const notesTag = document
      .querySelector("note-item")
      .shadowRoot.querySelectorAll(".note-item");
    notesTag.forEach((element) => {
      const deleteTag = element.querySelector("li:nth-of-type(2)");
      deleteTag.addEventListener("click", () => {
        Notes.removeNote(element.id).then(element.remove());
      });
      const archiveTag = element.querySelector("li");
      archiveTag.addEventListener("click", async () => {
        await Notes.archiveNote(element.id);
        location.reload();
      });
    });
  }

  // mengambil id untuk eksekusi delete atau kembali ke note utama
  if (notesArchives.length > 0) {
    const notesArcTag = document
      .querySelector("note-item-archived")
      .shadowRoot.querySelectorAll(".note-item-archived");
    notesArcTag.forEach((element) => {
      const deleteTagArc = element.querySelector("li:nth-of-type(2)");
      deleteTagArc.addEventListener("click", () => {
        Notes.removeNote(element.id).then(element.remove());
      });
      const unarchiveTag = element.querySelector("li");
      unarchiveTag.addEventListener("click", async () => {
        await Notes.unArchiveNote(element.id);
        location.reload();
      });
    });
  }
};

export default home;
