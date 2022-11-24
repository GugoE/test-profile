const getCookie = (name) => {
    let value = ''
    let cookies = document.cookie.split(';')

    cookies.forEach(val => {
        const itemKey = val.split('=')[0]
        if (itemKey.trim() === name) {
            value = val.split('=')[1];
        }
    })

    return value
}
const setCookie = ({key, value}, date= false) => {
    const dateString = date ? `; expires=${date}` : ''
    const cookieValue = value ?? true

    document.cookie = `${key}=${cookieValue}${dateString}`;
}

export { getCookie, setCookie}

