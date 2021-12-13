export const categorys = ['Dog', 'Cat'];
export const getAltText = (item) => {
    let res = "";

    switch (item) {
        case "Dog":
            res = 'here is a picture of a dog';
            break;
        case "Cat":
            res = 'here is a picture of a cat';
            break;
        default:
            res = 'here is a picture of a something';
            break;
    }

    return res;
}