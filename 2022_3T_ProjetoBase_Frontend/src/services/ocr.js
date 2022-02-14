import axios from "axios";

export const lerConteudoImagem = async (formData) => {

    let resultado;

    await axios({
        method: "POST",
        url: "https://OcrEquipamentos.cognitiveservices.azure.com/vision/v3.2/ocr?language=unk&detectOrientation=true&model-version=latest",
        data: formData,
        headers: {
            "Content-Type": "multipart/form-data",
            "Ocp-Apim-Subscription-Key": "4269caa482234389b05d89965e5e59b1"
        }
    })

    .then(response => {
        // console.log(response)

        resultado = lerJSON(response.data);
    })

    .catch(erro => console.log(erro))

    return resultado;
}

export const lerJSON = (obj) => {
    let resultado;

    obj.regions.forEach(regions => {
        regions.lines.forEach(lines =>{
            lines.words.forEach(words =>{
                if (words.text[0] === "1" && words.text[1] === "2") {
                    resultado = words.text;
                };
            });
        });      
    });

    return resultado;
}