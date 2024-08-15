const baseUrl = "https://notes-api.dicoding.dev/v2";

class Notes {
  static getNotes() {
    return fetch(`${baseUrl}/notes`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(new Error("Error is Found"));
        }
      })
      .then((responseJson) => {
        const { data: notes } = responseJson;
        return Promise.resolve(notes);
      });
  }

  static getNotesArchives() {
    return fetch(`${baseUrl}/notes/archived`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(new Error("Error is Found"));
        }
      })
      .then((responseJson) => {
        const { data: notes } = responseJson;
        return Promise.resolve(notes);
      });
  }

  static createNotes(event) {
    console.log(event);
    return fetch(`${baseUrl}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: event.title, body: event.desc }),
    })
      .then((response) => {
        response.json();
      })
      .catch((error) => {
        console.error("Can't Create a new Note");
      });
  }

  static removeNote(id) {
    return fetch(`${baseUrl}/notes/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(new Error("Failed to delete note"));
        }
      })
      .then((responseJson) => {
        if (responseJson.status === "success") {
          return Promise.resolve(responseJson.message);
        } else {
          return Promise.reject(new Error("Failed to delete note"));
        }
      });
  }

  static archiveNote(id) {
    return fetch(`${baseUrl}/notes/${id}/archive`, {
      method: "POST",
    })
      .then((response) => {
        response.json();
      })
      .catch((error) => {
        console.error("Note can't move to Archive");
      });
  }

  static unArchiveNote(id) {
    return fetch(`${baseUrl}/notes/${id}/unarchive`, {
      method: "POST",
    })
      .then((response) => {
        response.json();
      })
      .catch((error) => {
        console.error("Note can't move to Primer Note");
      });
  }
}

export default Notes;
