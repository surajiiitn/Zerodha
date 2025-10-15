import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
    return ( 
        <div>
            <Hero/>
            <RightSection/>
            <LeftSection/>
            <Universe/>
        </div>
     );
}

export default ProductPage;