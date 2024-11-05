-- Cars table
CREATE TABLE cars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    weight DECIMAL(6,2),
    image_url VARCHAR(255)
);

-- Car Components table
CREATE TABLE car_components (
    id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT,
    name VARCHAR(100),
    details TEXT,
    icon_name VARCHAR(50),
    FOREIGN KEY (car_id) REFERENCES cars(id)
);

-- Car Images table
CREATE TABLE car_images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT,
    image_url VARCHAR(255),
    FOREIGN KEY (car_id) REFERENCES cars(id)
);

-- Car Achievements table
CREATE TABLE car_achievements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT,
    achievement TEXT,
    year INT,
    FOREIGN KEY (car_id) REFERENCES cars(id)
);


-- Create events table
CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    event_date DATE NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_event_date (event_date)
);

-- Contact Information Table
CREATE TABLE contact_details (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(50) NOT NULL, -- email, address, phone etc
    value TEXT NOT NULL,
    icon_name VARCHAR(50),
    is_primary BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_type (type)
);

-- Operating Hours Table
CREATE TABLE operating_hours (
    id INT AUTO_INCREMENT PRIMARY KEY,
    day_of_week ENUM('Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'),
    open_time TIME,
    close_time TIME,
    is_closed BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_day (day_of_week)
);

-- Contact Form Messages Table
CREATE TABLE contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(20),
    message TEXT,
    status ENUM('new','read','replied','archived') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Check if Email or Phone is provided
DELIMITER $$
CREATE TRIGGER check_contact_message BEFORE INSERT ON contact_messages
FOR EACH ROW
BEGIN
    IF NEW.email IS NULL AND NEW.phone IS NULL THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Email or Phone is required';
    END IF;
END$$
DELIMITER ;
