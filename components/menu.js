import styles from './menu.module.css'

export default function Menu({items}) {
    const menuItems = (items) => items.map((item, key) => {
        return (
            <li key={key}>
                <a href={item.url}>{item.title}</a>
                {item?.children.length > 0 && (
                    <ul className="submenu">
                        {menuItems(item.children)}
                    </ul>
                )}
            </li>
        );
    })

    return (
        <nav className={styles.menu} aria-label="Main">
            <div className="wrap">
                <ul>
                    {menuItems(items)}
                </ul>
            </div>
        </nav>
    )
}
