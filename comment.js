document.addEventListener('DOMContentLoaded', function () {
    const commentSection = document.getElementById('commentSection');
    const commentForm = document.getElementById('commentForm');
    const studentNameInput = document.getElementById('studentName');
    const commentTextInput = document.getElementById('commentText');
    const submitCommentBtn = document.getElementById('submitCommentBtn');

    submitCommentBtn.addEventListener('click', function () {
        const studentName = studentNameInput.value.trim();
        const commentText = commentTextInput.value.trim();

        if (studentName !== '' && commentText !== '') {
            // Tạo một đối tượng bình luận
            const comment = document.createElement('div');
            comment.className = 'comment';
            comment.innerHTML = `<strong>${studentName}:</strong><br>${commentText}`;
            
            // Thêm bình luận vào khu vực bình luận
            commentSection.appendChild(comment);

            // Đặt giá trị trống cho ô nhập liệu sau khi thêm bình luận
            studentNameInput.value = '';
            commentTextInput.value = '';
        } else {
            alert('Vui lòng nhập đầy đủ thông tin bình luận.');
        }
    });
});
