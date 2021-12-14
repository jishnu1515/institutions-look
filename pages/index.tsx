import { FC, Fragment, useState } from 'react';

import { Box } from '@mui/system';

import { CircularProgress, Fade, TextField } from '@mui/material';
import Highlighter from 'react-highlight-words';
import Head from '../src/components/Head';
import fetchInstitutions from '../src/api/fetchInstitutions';
import { useQuery } from 'react-query';
import { useDebounce } from 'use-debounce';

const Index: FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm] = useDebounce(searchTerm, 300);
    const {
        data: options,
        isLoading: areOptionsLoading,
        isError,
        error,
    } = useQuery(['fetchInstitutions', debouncedSearchTerm], () =>
        fetchInstitutions({
            searchTerm: debouncedSearchTerm.trim(),
            maxItems: 10,
            minLengthToSearch: 3,
        }),
    );

    const renderItems = () => {
        if (!options || !options.length) {
            return <li>No results found.</li>;
        }
        return options.map((option) => (
            <Fragment key={option}>
                <li>
                    <Highlighter textToHighlight={option} searchWords={[debouncedSearchTerm]} />
                </li>
                <Box sx={{ m: 2 }} />
            </Fragment>
        ));
    };

    return (
        <>
            <Head />
            <Box
                sx={{
                    display: 'flex',
                    padding: '2rem',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                }}
            >
                <h4>Institutions Lookup</h4>
                <p>
                    A service to search all colleges in India, universities in India and all international universities
                    around the world using their name, a prefix of their name or any part of their name.
                </p>
                <Box sx={{ m: 1 }} />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}
                >
                    <TextField
                        id="name"
                        label="Type Name"
                        variant="outlined"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Box sx={{ m: 1 }} />
                    <Fade appear in={areOptionsLoading}>
                        <CircularProgress color="inherit" size={20} />
                    </Fade>
                </Box>
                <Box sx={{ m: 2 }} />
                <Box sx={{ fontSize: 16, display: 'flex', flexDirection: 'column' }}>
                    <Fade appear in={Boolean(debouncedSearchTerm)}>
                        <Box>
                            <span>
                                The results for <b>{debouncedSearchTerm}</b> are:
                            </span>
                            <ul>{renderItems()}</ul>
                        </Box>
                    </Fade>
                    <Fade appear in={isError}>
                        <Box sx={{ color: 'red' }}>{(error as string)?.toString() || ''}</Box>
                    </Fade>
                </Box>
            </Box>
        </>
    );
};

export default Index;
