import requests
from bs4 import BeautifulSoup
import yaml

# Replace with your Reddit username
username = "YOUR_REDDIT_USERNAME"

# Fetch your Reddit profile page
url = f"https://www.reddit.com/r/photography/"
headers = {'User-Agent': 'Mozilla/5.0'} 
response = requests.get(url, headers=headers)

# Parse the HTML content
soup = BeautifulSoup(response.content, "html.parser")

# Find all image URLs ending with .jpg (or adjust as needed)
image_urls = []
for img in soup.find_all('img'):
    img_url = img.get('src')
    if img_url and img_url.endswith('.jpg'):  
        image_urls.append(img_url)

# Store image URLs in a YAML file
with open('_data/reddit_images.yml', 'w') as f:
    yaml.dump(image_urls, f)