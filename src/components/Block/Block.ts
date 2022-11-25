import EventBus from "../EventBus";
import Handlebars from "handlebars";

class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_RENDER: "flow:render",
        FLOW_CDU: "flow:component-did-update"
    };
  
    _element: any = null;           // заглушка any
    _meta: any = null;          // заглушка any
    eventBus: EventBus;
    meta: any           //  заглушка any
    props: any;
  
    constructor(tagName: string = "div", props: any) {
        const eventBus = new EventBus();
        this._meta = {           
            tagName,
            props
        };

        this.eventBus = eventBus

        this.props = this._makePropsProxy(props);

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    }

    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    init() {
        this._createResources();
        this.dispatchComponentDidMount();
        this.eventBus.emit("flow:render");
    }

    _componentDidMount() {
        this.componentDidMount();
    }

    // Может переопределять пользователь, необязательно трогать
    componentDidMount() {
    }

    dispatchComponentDidMount() {
        this.eventBus.emit("flow:component-did-mount", this.props)
    }

    _componentDidUpdate() {
        this.componentDidUpdate();
    }

    // Может переопределять пользователь, необязательно трогать
    componentDidUpdate() {
        this.eventBus.emit("flow:render")
        return true;
    }

    setProps = (nextProps:{text: string}) => {
        if (!nextProps) {
            return;
        } 
        if (this.props.text == nextProps.text) {
            return
        }
    
        Object.assign(this.props, nextProps);
        this.eventBus.emit('flow:component-did-update', this.props, nextProps)
    };

    get element() {
        return this._element;
    }

    _render() {
        const block = this.render();
        
        // Этот небезопасный метод для упрощения логики
        // Используйте шаблонизатор из npm или напишите свой безопасный
        // Нужно не в строку компилировать (или делать это правильно),
        // либо сразу в DOM-элементы возвращать из compile DOM-ноду
        this._element.innerHTML = block;
        // this._createDocumentElement()
    }

    // Может переопределять пользователь, необязательно трогать
    render(): string {
        return Handlebars.compile(this.props.tpl)(this.props.data)
    }

    getContent() {
        return this.element;
    }

    _makePropsProxy(props: any) {           //  заглушка any
        const self = this

        // lolkekcheburek техническая переменная
        const lolkekcheburek = new Proxy(props, {
            deleteProperty(target, props) {
                throw new Error('нет доступа')
            },
            set(target, prop, val) {

                props[prop] = val
                self.setProps(props);
                return true
            }
        })

        return lolkekcheburek;
    }

    _createDocumentElement(tagName:string) {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        const newElement: HTMLElement = document.createElement(tagName),
              classes:string[] = this.props.data.classList,
              id: string = this.props.data.id,
              placehold: string = this.props.data.placeholder;
              
        if (classes) {
            if (classes.length != 0)
                classes.forEach((item: string) => {
                    newElement.classList.add(item)
                })
        }
        if (id) {
            newElement.id = id
        }
        return newElement
    }

    show() {
        this._element.style.display = 'block'
    }

    hide() {
        this._element.style.display = 'none'
    }
}

export default Block;