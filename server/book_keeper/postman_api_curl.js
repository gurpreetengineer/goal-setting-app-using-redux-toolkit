[
  {
    "Goals": {
      "http://localhost:5000/api/goals ": {
        "type": "GET",
        "URL": "curl --location --request GET 'http://localhost:5000/api/goals' \
        --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzgzYTBiNWNmZjVkMzA1NDVlZjE0YiIsImlhdCI6MTY1NzM5MDU1OCwiZXhwIjoxNjU5OTgyNTU4fQ.tFmhBXLmeLdIdaEcezNe6gjknQd_WP0pJIwbL_0jt1I'"
      },
      "http://localhost:5000/api/goals": {
        "type": "POST",
        "URL": "curl --location --request POST 'http://localhost:5000/api/goals' \
        --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzlhZjBlMjE0YTY4NDI1ZmNkZjE1ZCIsImlhdCI6MTY1NzM4ODkyNSwiZXhwIjoxNjU5OTgwOTI1fQ.BAzPSZ8eT6aN8UuctNkEf1S2TwQa0sD5Zgu8uKuvunA' \
        --header 'Content-Type: application/x-www-form-urlencoded' \
        --data-urlencode 'text=Garry bamrah 12 goals'",
      },
      "http://localhost:5000/api/goals/id": {
        "type": "PUT",
        "URL": "curl --location --request PUT 'http://localhost:5000/api/goals/62c9bf9a886655412cf5a786' \
        --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzgzYTBiNWNmZjVkMzA1NDVlZjE0YiIsImlhdCI6MTY1NzI4OTIyOCwiZXhwIjoxNjU5ODgxMjI4fQ.fVYI3mitIWdMZ9Pd1d4XR-3h9VpOS1tLDI5-czT9b8W' \
        --header 'Content-Type: application/x-www-form-urlencoded' \
        --data-urlencode 'text=this is the put API here'"
      },
      "http://localhost:5000/api/goals/id": {
        "type": "DELETE",
        "URL": "curl --location --request DELETE 'http://localhost:5000/api/goals/62c9bf64886655412cf5a77e' \
        --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzgzYTBiNWNmZjVkMzA1NDVlZjE0YiIsImlhdCI6MTY1NzM5MDU1OCwiZXhwIjoxNjU5OTgyNTU4fQ.tFmhBXLmeLdIdaEcezNe6gjknQd_WP0pJIwbL_0jt1I'",
      }
    },
    "Users": {}
  }
]
