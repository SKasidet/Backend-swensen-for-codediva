document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const createcategoryForm = document.getElementById('createcategoryForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(loginForm);
            const email = formData.get('email');
            const password = formData.get('password');
            
            try {
                const response = await fetch('/user/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();
                if (response.ok) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: data.message,
                        confirmButtonText: 'OK'
                    }).then(() => {
                        window.location.href = '/product/'; // Redirect to a different page
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'ไม่สำเร็จ',
                        text: data.error,
                        confirmButtonText: 'OK'
                    });
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'An error occurred. Please try again later.',
                    confirmButtonText: 'OK'
                });
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(registerForm);
            const name = formData.get('name');
            const lastname = formData.get('lastname');
            const tel = formData.get('tel');
            const email = formData.get('email');
            const password = formData.get('password');
            const gender = formData.get('gender');
            const birthday = formData.get('birthday');
            const acceptnews = formData.get('acceptnews');
            const acceptrule = formData.get('acceptrule');

            try {
                const response = await fetch('/user/register', { // Changed to the correct endpoint
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password, name, lastname, tel, gender, birthday, acceptnews, acceptrule })
                });

                const data = await response.json();
                if (response.ok) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'สมัครสำเร็จ',
                        confirmButtonText: 'OK'
                    }).then(() => {
                        window.location.href = '/user/login'; // Redirect to a different page
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'ไม่สำเร็จ',
                        text: data.error,
                        confirmButtonText: 'OK'
                    });
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'An error occurred. Please try again later.',
                    confirmButtonText: 'OK'
                });
            }
        });
    }
    
});
