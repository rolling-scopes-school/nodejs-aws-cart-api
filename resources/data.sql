-- Inserting data into carts
INSERT INTO carts (user_id, created_at, updated_at, status)
VALUES ('f783fab8-cf90-4b29-a1be-8c99b154efbc', CURRENT_DATE - INTERVAL '1 DAY', CURRENT_DATE, 'OPEN'),
       ('8bce2a1e-3054-4af4-8c26-693e6f18fe1d', CURRENT_DATE - INTERVAL '2 DAY', CURRENT_DATE, 'OPEN'),
       ('14f6751c-abc7-4b4b-9278-74b8f9b009c3', CURRENT_DATE - INTERVAL '3 DAY', CURRENT_DATE, 'ORDERED');

-- Inserting data into cart_items
INSERT INTO cart_items (cart_id, product_id, count)
VALUES
    ('f5bb2477-7042-4a1e-9fc3-cf30c09b491b', 'dfdc3fe6-f1ae-4c47-a1ff-dddbcd2daaa1', 3),
    ('f5bb2477-7042-4a1e-9fc3-cf30c09b491b', 'b75645d6-d53a-4ac9-b6a0-7070e9ca8e3c', 1),
    ('16159d6d-eb5a-4e47-8d2e-b9e26d6ce768', '5b5e690d-eda9-4856-9a88-b252300b7a59', 2),
    ('e257f348-d02a-4c2c-a292-ac7ebc82b94a', '52576bf0-b5e5-4f85-bc22-5a7972aa85ff', 1),
    ('e257f348-d02a-4c2c-a292-ac7ebc82b94a', 'dfdc3fe6-f1ae-4c47-a1ff-dddbcd2daaa1', 1);
