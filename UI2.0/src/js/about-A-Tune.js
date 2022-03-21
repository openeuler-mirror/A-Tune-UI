import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            num: 0,
        };
    },
    methods: {
        theFirstClick() {
            document.getElementById("first").style.display = "block";
            document.getElementById("second").style.display = "none";
            document.getElementById("third2").style.display = "none";
            document.getElementById("third").style.display = "none";
        },
        theSecondClick() {
            document.getElementById("first").style.display = "none";
            document.getElementById("second").style.display = "block";
            document.getElementById("third2").style.display = "none";
            document.getElementById("third").style.display = "none";
        },
        showThirdSubmenu() {
            if (document.getElementById("thirdSubmenu").style.display == "none") {
                document.getElementById("thirdSubmenu").style.display = "block";
                document.getElementById("down-up1").style.display = "none";
                document.getElementById("up-down1").style.display = "block";
            }
            else {
                document.getElementById("thirdSubmenu").style.display = "none";
                document.getElementById("up-down1").style.display = "none";
                document.getElementById("down-up1").style.display = "block";
            }
        },
        theThird1Click() {
            document.getElementById("first").style.display = "none";
            document.getElementById("second").style.display = "none";
            document.getElementById("third1").style.display = "block";
            document.getElementById("third2").style.display = "none";
        },
        theThird2Click() {
            document.getElementById("first").style.display = "none";
            document.getElementById("second").style.display = "none";
            document.getElementById("third1").style.display = "none";
            document.getElementById("third2").style.display = "block";
        },
        theThird3Click() { },
        theThird4Click() { },
        theThird5Click() { },
        theThird6Click() { },
        theThird7Click() { },
        theThird8Click() { },
        theThird9Click() { },
        theFourthclick() { },
        theFifthclick() { },
        showSixthSubmenu() {
            if (document.getElementById("sixthSubmenu").style.display == "none") {
                document.getElementById("sixthSubmenu").style.display = "block";
                document.getElementById("down-up2").style.display = "none";
                document.getElementById("up-down2").style.display = "block";
            }
            else {
                document.getElementById("sixthSubmenu").style.display = "none";
                document.getElementById("up-down2").style.display = "none";
                document.getElementById("down-up2").style.display = "block";
            }
        },
        theSixth1click() { },
        theSixth2click() { },
        theSixth3click() { },
        showSeventhSubmenu() {
            if (document.getElementById("seventhSubmenu").style.display == "none") {
                document.getElementById("seventhSubmenu").style.display = "block";
                document.getElementById("down-up3").style.display = "none";
                document.getElementById("up-down3").style.display = "block";
            }
            else {
                document.getElementById("seventhSubmenu").style.display = "none";
                document.getElementById("up-down3").style.display = "none";
                document.getElementById("down-up3").style.display = "block";
            }
        },
        theSeventh1click() { },
        theSeventh2click() { },
        theSeventh3click() { },
    },

});