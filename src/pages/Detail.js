import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Detail = () => {

    let {id} = useParams();
       
    const URL_API = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=a03c43af&app_key=e5d79dffe2b66474ff75017f1e0f357d`;
    const getDataSource = () => {
      axios
        .get(URL_API)
        .then((response) => {
          setDatax(response.data.recipe);
          console.log(response.data.recipe);
        })
        .catch((error) => console.error(`Error : ${error}`));
    };
      useEffect(() => {
         getDataSource();
      }, []);
  
    const [datax, setDatax] = useState('');
    return ( 
        <>
        <Container className="mt-5 card p-5  rounded14">
            <Row>
                <div className="col-md-6 text-center">
                    <img src={datax.image} className="img-fluid" alt="Gambar-Makanan" />
                </div>
                <div className="col-md-6 text-center">
                    <h1>{datax.label}</h1>
                    <hr />
                    <span className="text-18">Kategori :</span>
                    <p className="text-24">{datax.mealType}</p>
                    <span className="text-18">Sumber Resep :</span>
                    <p className="text-24">{datax.source}l</p>
                    <span className="text-18">Kalori :</span>
                    <p className="text-24"> {Math.round(datax.calories / 2)}</p>
                    <hr />
                    <hr />
                    <span className="text-18">Bahan-bahan :</span>
                    <div className="text-start">
                        {/* {
                            datax.ingredientLines.map((i) =>(
                                <p className="text-16">{i}</p>
                            ))
                        } */}
                        {datax.ingredientLines}
                    </div>
                    <hr />
                    {/* <span className="text-18">Gizi :</span>
                    <div className="text-start">
                    <p className="text-20">Lemak :{Math.round(datax.totalNutrients.FAT.quantity)}g</p>
                    <p className="text-20">Kalsium :{Math.round(datax.totalNutrients.CA.quantity)}mg</p>
                    <p className="text-20">Magnesium :{Math.round(datax.totalNutrients.MG.quantity)}mg</p>
                    </div>
                    <div className="text">
                    <p className="text-16">Two 0.6-ounce cans crabmeat, drained</p>
                    </div>
                     */}
                    

                </div>
            </Row>
        </Container>
        </>
     );
}
 
export default Detail;