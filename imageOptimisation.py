import os
from PIL import Image

def optimize_image(image_path):
    try:
        with Image.open(image_path) as img:
            img.save(image_path, optimize=True, quality=85)
    except Exception as e:
        print(f"Failed to optimize {image_path}: {e}")

def optimize_images_in_directory(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png', '.gif', '.bmp')):
                image_path = os.path.join(root, file)
                optimize_image(image_path)

if __name__ == "__main__":
    optimize_images_in_directory('public')