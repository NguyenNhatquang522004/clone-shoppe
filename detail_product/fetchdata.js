
export const getData = async (url) => {
    try {
        let province = {};
        const provincedata = await axios.get(`${url}`);

        if (provincedata) {
            return provincedata;
        } else {
            province.mess = "not data ....";
            alert(province.mess);
            return null;
        }
    } catch (e) {
        console.log(e);
        throw e;
    }
};


