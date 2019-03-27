SELECT u.image, v.id, v.title, v.created_at, v.url FROM spots s
JOIN videos v
ON s.id = v.spot_id
JOIN users u
ON v.user_id = u.id
WHERE ${id} = s.id;