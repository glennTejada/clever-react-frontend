import React from "react";
import "./registration.scss";
const PromotionalCamp = () => {
  return (
    <div>
      <div className="registration-main-area-wrap">
        <div className="registration-form-wrap">
          <div className="registration-form-inner-wrap">
            <h3>Sign Up &win a FREE Copy?</h3>
            <p>
              Enter your best email address below. Get notified when we go live
              & discover how you can win a FREE copy!
            </p>
            <input type="email" placeholder="Enter your email" />
            <input type="checkbox" />
            <p>
              Yes, I like to receive further communications, like: news, updates
              & special offers. I know I can unsubscribe from this anytime I
              want. Plus I know you protect my privacy in accordance with your
              Privacy Policy.
            </p>
            <button>SIGN UP & GET STARTED NOW ➞</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalCamp;
