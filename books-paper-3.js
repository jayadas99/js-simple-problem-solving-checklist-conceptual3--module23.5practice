function paperRequirement(book1Quantity, book2Quantity, book3Quantity){
    const book1Pages = 100;
    const book2Pages = 200;
    const book3Pages = 300;

    const book1Paper = book1Quantity * book1Pages;
    const book2Paper = book2Quantity * book2Pages;
    const book3Paper = book3Quantity * book3Pages;

    const totalPaper = book1Paper + book2Paper + book3Paper;
    return totalPaper;

}

const totalPaperRequirement = paperRequirement(3, 2, 5);
console.log('total papers required: ', totalPaperRequirement);