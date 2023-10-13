docker build -t app .
docker run -p 3000:3000 -d app
echo "Go to localhost:3000 on your browser"