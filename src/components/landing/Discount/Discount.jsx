import Link from "next/link";

export const Discount = () => {
    return (
        <>
            {/* <!-- BEGIN DISCOUNT --> */}
            <div className="discount js-img">
                <div className="wrapper">
                    <div>
                        <img
                            
                            src="https://previews.123rf.com/images/pashabo/pashabo1511/pashabo151100028/48001822-black-friday-vente-affiche-de-la-publicit%C3%A9-avec-chute-de-neige-fond-soldes-de-no%C3%ABl.jpg"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <div className="discount-info">
                        <span className="saint-text">Discount</span>
                        <span className="main-text">Get Your <span>50%</span> Off
                        </span >
                        <p style={{color:'red',fontFamily:'Times New Roman',fontSize:'30px'}}>
                            Đừng bỏ lỡ các chương trình khuyến mãi Hot tại Miều bạn nhé !!!
                        </p>

                        <Link href="/shop">
                            <a className="btn" style={{color:'with',backgroundColor: 'black'}}>Mua Ngay</a>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <!-- DISCOUNT EOF   --> */}
        </>
    );
};
