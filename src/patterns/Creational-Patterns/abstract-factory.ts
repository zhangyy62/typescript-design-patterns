interface Button {
    Paint();
}

interface GUIFactory {
    CreateButton(): Button;
}

class WinButton implements Button {
    public Paint() {
        return 'this is winButton'
    }
}

class OSXButton implements Button {
    public Paint() {
        return 'this is osxButton'
    }
}


class WinFactory implements GUIFactory {
    CreateButton(): Button {
        return new WinButton();
    }
}

class OSXFactory implements GUIFactory {
    public CreateButton(): Button {
        return new OSXButton();
    }
}
