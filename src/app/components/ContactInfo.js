const ContactInfo = ({ item }) => {
    return (
        <div className="flex items-center">
            <item.icon
                color={item.isRed ? "#FF0000"  : "#43B02A"}
                height="100%"
                className="mx-2"
            />
            <p className="text-white text-start">{item.text}</p>
        </div>
    )
}

export default ContactInfo;