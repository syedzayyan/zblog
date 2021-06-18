import CookieConsent, { Cookies } from "react-cookie-consent";

export default function CookieConsentComp() {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Sure!"
            cookieName="SYEDZAYYANMASUDCOOKIECONSENT"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={150}
        >
            This website uses cookies to enhance the user experience. I hope you are okay with that :).
        </CookieConsent>
    )
}