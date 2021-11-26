export const borderClick = {
  methods: {
    toggleBorder(e) {
      // toggle a styling class on the object that is clicked.
      e.currentTarget.classList.toggle("bordered");
    }
  }
}
