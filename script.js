
document.addEventListener('DOMContentLoaded', function() {
    const markdownInput = document.getElementById('markdown-input');
    const previewBtn = document.getElementById('preview-btn');
    const preview = document.getElementById('preview');

    previewBtn.addEventListener('click', function() {
        const markdownText = markdownInput.value;
        const html = convertMarkdownToHtml(markdownText);
        preview.innerHTML = html;
    });

   
    function convertMarkdownToHtml(markdown) {
      

        return `<p>${markdown.replace(/\n/g, '<br>')}</p>`;
    }
});
