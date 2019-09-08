import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    static propTypes = {
        pageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        pageNumber: PropTypes.number.isRequired,
        onClick: PropTypes.func.isRequired,
        isActive: PropTypes.bool.isRequired,
        isDisabled: PropTypes.bool,
        activeClass: PropTypes.string,
        activeLinkClass: PropTypes.string,
        itemClass: PropTypes.string,
        linkClass: PropTypes.string,
        disabledClass: PropTypes.string,
        href: PropTypes.string
    };

    static defaultProps = {
        activeClass: "active",
        disabledClass: "disabled",
        itemClass: undefined,
        linkClass: undefined,
        activeLinkCLass: undefined,
        isActive: false,
        isDisabled: false,
        href: "#"
    };

    handleClick=(e)=> {
        const { isDisabled, pageNumber } = this.props;
        e.preventDefault();
        if (isDisabled) {
            return;
        }
        this.props.onClick(pageNumber);
    }

    render() {
        let {
            pageText,
            pageNumber,
            activeClass,
            itemClass,
            linkClass,
            activeLinkClass,
            disabledClass,
            isActive,
            isDisabled,
            href,
            isLast,
            isFirst,
            isNext,
            isPrev
        } = this.props;

        const css = cx(itemClass, {
            [activeClass]: isActive,
            [disabledClass]: isDisabled
        });

        const linkCss = cx(linkClass, {
            [activeLinkClass]: isActive
        });
        
        if (isLast || isFirst || isPrev || isNext) {
            return (
                <li className={css} onClick={(e)=>this.handleClick(e)}>
                    <a className={linkCss} href={href}>
                        <i className={pageText}></i>
                    </a>
                </li>
            );
        }
        else {
            return (
                <li className={css} onClick={(e)=>this.handleClick(e)}>
                    <a className={linkCss} href={href}>
                        {pageText}
                    </a>
                </li>
            );
        }
    }
}