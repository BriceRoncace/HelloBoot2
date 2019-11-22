insert into widget (id, name, expiration) values (HIBERNATE_SEQUENCE.nextval, 'Widget 1', '2018-06-04');
insert into widget (id, name, expiration) values (HIBERNATE_SEQUENCE.nextval, 'Widget 2', '2018-06-05');
insert into widget (id, name, expiration) values (HIBERNATE_SEQUENCE.nextval, 'Widget 3', '2018-06-06');
insert into widget (id, name, expiration) values (HIBERNATE_SEQUENCE.nextval, 'Widget 4', '2018-06-07');
insert into user (id, email, first_name, last_name, username, password) values (1, 'brice.roncace@isp.idaho.gov', 'Brice', 'Roncace', 'brice', '$2a$10$GrhKMOe1j6USkpn/FsHDpOHXvzMETUFU8nM6y8xmRb1xl7pBC5YHG');
insert into user_authorities (user_id, authority) values (1, 'ADMIN');