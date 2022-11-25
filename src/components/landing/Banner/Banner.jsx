import Link from "next/link";

export const Banner = () => {
    return (
        <>
            {/* <!-- BEGIN MAIN BLOCK --> */}
            <div className="main-block load-bg">
                <div className="wrapper">
                    <div className="main-block__content">
                        <span className="saint-text">Professional</span>
                        <h1 className="main-text">Beauty &amp; Fashion</h1>
                        <p>
                            Thiết kế dành riêng cho Bạn 
                        </p>

                        <Link href="/shop">
                            <a className="btn">Mua ngay</a>
                        </Link>
                    </div>
                </div>
                <img
                    className="main-block__decor"
                    //src="/assets/img/main-block-decor.png"
                    src="https://i0.wp.com/dl7.glitter-graphics.net/pub/275/275067k4a1ryw7d4.gif?zoom=2"
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
            {/* <!-- MAIN BLOCK EOF --> */}
        </>
    );
};
