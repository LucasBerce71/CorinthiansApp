import React, { memo, useCallback, useEffect, useState } from 'react';
import { Container, Subtitle, Title } from './styles';

const Header: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<string>('');

    const realTimeClock = useCallback(() => {
        setInterval(() => {
            let date = new Date();
            let day = String(date.getDate());
            let month = date.getMonth() < 10 ? String(date.getMonth()).padStart(2, '0') : String(date.getMonth());
            let year = String(date.getFullYear());
            let hours = date.getHours() < 10 ? String(date.getHours()).padStart(2, '0') : String(date.getHours());
            let minutes = date.getMinutes() < 10 ? String(date.getMinutes()).padStart(2, '0') : String(date.getMinutes());
            let seconds = date.getSeconds() < 10 ? String(date.getSeconds()).padStart(2, '0') : String(date.getSeconds());

            let formatedCurrentTime = `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`

            setCurrentTime(formatedCurrentTime);
        }, 1000);
    }, []);

    useEffect(() => {
        realTimeClock();
    }, []);

    return (
        <Container>
            <Title>
                Suas tarefas de hoje dia:
            </Title>

            <Subtitle>
                {currentTime}
            </Subtitle>
        </Container>
    );
};

export default memo(Header);